import { useState } from "react"
import "./App.css"
import Calendar from "./components/Calendar"
import ShopItemClass from "./components/ShopItemClass"
import ShopItemFunc from "./components/ShopItemFunc"
import TaskSwitcher from "./components/TaskSwitcher"

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
      <TaskSwitcher task={task} onChangeHandler={handler} />

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
