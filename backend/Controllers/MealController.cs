using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("backend/[controller]")]
    public class MealController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MealController(ApplicationDbContext context)
        {
            _context = context;
        }
        #region GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meal>>> GetMeals()
        {
            return await _context.Meals.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Meal>> GetMealById(int id)
        {
            Meal? meal = await _context.Meals.FindAsync(id);

            if (meal == null)
            {
                return NotFound();
            }

            return Ok(meal);
        }
        #endregion
        #region PUT[HttpPut("{id}")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMeal(int id, Meal meal)
        {
            if (id != meal.Id)
            {
                return BadRequest("Meal ID mismatch");
            }

            _context.Entry(meal).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MealExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        private bool MealExists(int id)
        {
            return _context.Meals.Any(e => e.Id == id);
        }

        #endregion

        #region DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeal(int id)
        {
            Meal? meal = await _context.Meals.FindAsync(id);
            if (meal == null)
            {
                return NotFound();
            }

            _context.Meals.Remove(meal);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        #endregion

        #region POST
        [HttpPost]
        public async Task<ActionResult<Meal>> CreateMeal(Meal meal)
        {
            if (meal == null)
            {
                return BadRequest("Meal cannot be null");
            }
            _context.Meals.Add(meal);

            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMealById), new { id = meal.Id }, meal);
        }
        #endregion
    }
}
