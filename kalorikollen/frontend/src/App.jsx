import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"

var headerTitle = "KALORI-KOLLEN"

function App() {
  return <>
    <div className="min-h-screen flex flex-col">
      <Header title={headerTitle} />
      <Main>
        <p>Content</p>
      </Main>
    </div>
  </>
}

export default App
