interface IProps {
  task: string
  onChangeHandler: (e: any) => void
}

const TaskSwitcher = ({ task, onChangeHandler }: IProps) => {
  return (
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
      <input type="radio" id="contactChoice1" name="contact" value="1" defaultChecked={task == "1"} onChange={onChangeHandler} />
      <label htmlFor="contactChoice1">Task1 (ShopItemFunc)</label>
      <br />
      <input type="radio" id="contactChoice2" name="contact" value="2" defaultChecked={task == "2"} onChange={onChangeHandler} />
      <label htmlFor="contactChoice2">Task2 (ShopItemClass)</label>
      <br />
      <input type="radio" id="contactChoice3" name="contact" value="3" defaultChecked={task == "3"} onChange={onChangeHandler} />
      <label htmlFor="contactChoice3">Task3 (Calendar)</label>
    </div>
  )
}
export default TaskSwitcher
