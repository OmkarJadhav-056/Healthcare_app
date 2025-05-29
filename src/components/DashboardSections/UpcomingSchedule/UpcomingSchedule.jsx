import React from 'react'
import style from './UpcomingSchedule.module.css';
import { thursdayData, saturdayData } from "../../../data/mockData";

const UpcomingSchedule = () => {
  return (
    <div className={style.main}>
      <h3>The Upcoming schedule</h3>
      <div className={style.box}>
        <p id={style.para}>On Thursday</p>
        <div className={style.cardbox}>
          {
            thursdayData.map((data, idx) => {
              return <div key={idx} className={style.card}>
                <div className={style.title}>
                  <p>{data.name}</p>
                  <img src={data.img} />
                </div>
                <div id={style.time}>
                  <p>{data.time}</p>
                </div>
              </div>
            })
          }
        </div>
        <p id={style.para}>On Saturday</p>
        <div className={style.cardbox}>
          {
            saturdayData.map((data, idx) => {
              return <div key={idx} className={style.card}>
                <div className={style.title}>
                  <p>{data.name}</p>
                  <img src={data.img} />
                </div>
                <div id={style.time}>
                  <p>{data.time}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default UpcomingSchedule
