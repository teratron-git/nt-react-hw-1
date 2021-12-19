import { useState } from "react"
import "./App.css"
import ShopItemClass from "./components/ShopItemClass"
import ShopItemFunc from "./components/ShopItemFunc"

const App = () => {
  const [task, setTask] = useState("2")

  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  }

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  return (
    <>
      <div style={{ position: "absolute", zIndex: 9 }}>
        <input type="radio" id="contactChoice1" name="contact" value="1" defaultChecked onChange={handler} />
        <label htmlFor="contactChoice1">Task1</label>
        <input type="radio" id="contactChoice2" name="contact" value="2" onChange={handler} />
        <label htmlFor="contactChoice2">Task2</label>
        <input type="radio" id="contactChoice3" name="contact" value="3" onChange={handler} />
        <label htmlFor="contactChoice3">Task3</label>
      </div>

      {task == "1" && (
        <div className="container">
          <div className="background-element" />
          <div className="highlight-window">
            <div className="highlight-overlay" />
          </div>
          <div className="window">
            <ShopItemFunc item={item} />
          </div>
        </div>
      )}

      {task == "2" && (
        <div className="container">
          <div className="background-element" />
          <div className="highlight-window">
            <div className="highlight-overlay" />
          </div>
          <div className="window">
            <ShopItemClass item={item} />
          </div>
        </div>
      )}

      {task == "3" && <div className="container">КАЛЕНДАРЬ</div>}
    </>
  )
}

export default App
