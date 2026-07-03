import { scheduleItems } from '../data/schedule'
import './Schedule.css'

function Schedule() {
  return (
    <div className="schedule" id="schedule">
      <div className="schedule__label">Расписание</div>
      <div className="schedule__list">
        {scheduleItems.map((item) => (
          <div className="schedule__item" key={item.day}>
            <div className="schedule__item-info">
              <div className="schedule__day">{item.day}</div>
              <div className="schedule__place">{item.place}</div>
            </div>
            <div className="schedule__time">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
