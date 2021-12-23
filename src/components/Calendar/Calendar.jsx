import moment from "moment"
import "moment/locale/ru"
import "./Calendar.css"

const Calendar = ({ date }) => {
  moment.updateLocale("ru", { week: { dow: 1 } })

  let allDays = []
  const weeks = []
  const daysInWeek = [0, 1, 2, 3, 4, 5, 6]

  const firstDay = moment(date).startOf("month").startOf("week")
  const day = firstDay.clone().subtract(1, "day")
  allDays = [...Array(35)].map(() => day.add(1, "day").clone())

  for (let i = 1; i <= Math.floor(allDays.length / 7); i++) {
    weeks.push(i)
  }

  return (
    <div style={{ width: "325px", margin: "50px auto" }}>
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{moment(date).format("dddd")}</div>

          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{moment(date).format("D")}</div>
            <div className="ui-datepicker-material-month">{moment(date).format("D MMMM").split(" ")[1]}</div>
            <div className="ui-datepicker-material-year">{moment(date).format("YYYY")}</div>
          </div>
        </div>

        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{moment(date).format("MMMM")}</span>&nbsp;
            <span className="ui-datepicker-year">{moment(date).format("YYYY")}</span>
          </div>
        </div>

        <table className="ui-datepicker-calendar">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">
                Пн
              </th>
              <th scope="col" title="Вторник">
                Вт
              </th>
              <th scope="col" title="Среда">
                Ср
              </th>
              <th scope="col" title="Четверг">
                Чт
              </th>
              <th scope="col" title="Пятница">
                Пт
              </th>
              <th scope="col" title="Суббота">
                Сб
              </th>
              <th scope="col" title="Воскресенье">
                Вс
              </th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, i) => (
              <tr key={week}>
                {daysInWeek.map((day) => {
                  let className = ""
                  if (!(allDays[i * 7 + day].format("M") == moment(date).format("M"))) {
                    className = "ui-datepicker-other-month"
                  } else if (allDays[i * 7 + day].format("D") == moment(date).format("D")) {
                    className = "ui-datepicker-today"
                  }

                  return (
                    <td key={day} className={className}>
                      {allDays[i * 7 + day].format("D")}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Calendar
