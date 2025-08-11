import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import CollapsibleContainer from "./components/CollapsibleContainer"
import DishCard from "./components/DishCard"
import Hotdog from "./assets/hotdog.jpg"
import Milk from "./assets/milk.png"

var headerTitle = "KALORI-KOLLEN"
var titleBreakfast = "Frukost"
var titleLunch = "Lunch"
var titleDinner = "Middag"

function App() {
  return <>
    <div className="bg-emerald-600 min-h-screen flex flex-col">
      <Header title={headerTitle} />
      <Main>
        <CollapsibleContainer title={titleBreakfast}>
          <DishCard title="Korv med bröd"
            imageSrc={Hotdog}
            accessories={["Ketchup", "Senap", "Rostad lök"]}
            onAccessoriesChange={(selected) => console.log("Valda tillbehör:", selected)} />
          <DishCard title="Hotdog" imageSrc={Hotdog} />
          <DishCard title="Hotdog" imageSrc={Hotdog} />
          <DishCard title="Hotdog" imageSrc={Hotdog} />
          <DishCard title="Hotdog" imageSrc={Hotdog} />
          <DishCard title="Hotdog" imageSrc={Hotdog} />
          <DishCard title="Hotdog" imageSrc={Hotdog} />
          <DishCard title="Milk" imageSrc={Milk} />
        </CollapsibleContainer>
        <CollapsibleContainer title={titleLunch}></CollapsibleContainer>
        <CollapsibleContainer title={titleDinner}></CollapsibleContainer>
      </Main>
    </div>
  </>
}

export default App
