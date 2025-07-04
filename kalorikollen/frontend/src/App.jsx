import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import CollapsibleContainer from "./components/CollapsibleContainer"

var headerTitle = "KALORI-KOLLEN"
var containerTitle1 = "Frukost"
var containerTitle2 = "Lunch"
var containerTitle3 = "Middag"

function App() {
  return <>
    <div className="bg-emerald-600 min-h-screen flex flex-col">
      <Header title={headerTitle} />
      <Main>
        <CollapsibleContainer title={containerTitle1} />
        <CollapsibleContainer title={containerTitle2} />
        <CollapsibleContainer title={containerTitle3} />
      </Main>
    </div>
  </>
}

export default App
