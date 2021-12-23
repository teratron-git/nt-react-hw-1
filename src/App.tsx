import { useState } from "react"
import "./App.css"
import Calendar from "./components/Calendar"
import ShopItemClass from "./components/ShopItemClass"
import ShopItemFunc from "./components/ShopItemFunc"

export interface IItem {
  item: {
    brand: string
    title: string
    description: string
    descriptionFull: string
    price: number
    currency: string
  }
}

const App = () => {
  const [task, setTask] = useState("1")

  const now: Date = new Date(2017, 2, 8)

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  const tasksSwitcher = (
    <div
      style={{
        position: "absolute",
        zIndex: 9,
        top: 0,
        left: 0,
        background: "rgba(255,255,255,0.8)",
        padding: "10px",
        margin: "5px",
        border: "1px solid black",
        borderRadius: "30%",
      }}
    >
      <input type="radio" id="contactChoice1" name="contact" value="1" defaultChecked={task == "1"} onChange={handler} />
      <label htmlFor="contactChoice1">Task1 (ShopItemFunc)</label>
      <br />
      <input type="radio" id="contactChoice2" name="contact" value="2" defaultChecked={task == "2"} onChange={handler} />
      <label htmlFor="contactChoice2">Task2 (ShopItemClass)</label>
      <br />
      <input type="radio" id="contactChoice3" name="contact" value="3" defaultChecked={task == "3"} onChange={handler} />
      <label htmlFor="contactChoice3">Task3 (Calendar)</label>
    </div>
  )

  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  }

  return (
    <>
      {tasksSwitcher}

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

      {task == "3" && <Calendar date={now} />}
    </>
  )
}

export default App
