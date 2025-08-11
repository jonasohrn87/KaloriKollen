namespace backend.Models
{
    public class Meal
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? ImageUrl {  get; set; }
        public required int CalorieValue { get; set; }


    }
}
