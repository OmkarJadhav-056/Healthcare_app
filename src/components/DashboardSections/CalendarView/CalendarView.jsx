import React from 'react'
import style from './CalendarView.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { weekDays, weeklyAppointments, highlightedSlots, appointmentsData } from "../../../data/mockData";
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';

const CalendarView = () => {

  return (
    <div className={style.main}>
      <div className={style.calender}>

        {/* Calender Box */}
        <div className={style.box}>
          <div className={style.header}>
            <p>August 2022</p>
            <div id={style.icon}>
              <i><FontAwesomeIcon icon={faArrowLeftLong} /></i>
              <i><FontAwesomeIcon icon={faArrowRightLong} /></i>
            </div>
          </div>
          <div className={style.container}>
            {weekDays.map((day) => (
              <div key={day.date} className={`${style.dayColumn} ${day.name === "Tue" ? style.highlightColumn : ""}`}>
                <div className={style.dayHeader}>
                  <div className={style.dayName}>{day.name}</div>
                  <div className={style.dayDate}>{day.date}</div>
                </div>
                <div className={style.times}>
                  {weeklyAppointments[day.date]?.map((time, index) => (
                    <div key={index} className={`${style.timeSlot} ${highlightedSlots[day.date] === time ? style.highlighted : ""}`}>
                      {time} </div>)) || <div className={style.empty}>—</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Box  */}
        <div className={style.appointment}>
          {
            appointmentsData.map((data, idx) => {
              return <div key={idx} className={`${style.left} ${data.name == "Dentist" ? style.bluebox : style.graybox}`}>
                <div className={style.title}>
                  <p>{data.name}</p>
                  <img src={data.img} />
                </div>
                <div id={style.data}>
                  <p>{data.time}</p>
                  <p>{data.drname}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>

      {/* Upcoming schedule box */}
      <div className={style.schedule}>
        <UpcomingSchedule />
      </div>

    </div>
  )
}

export default CalendarView
