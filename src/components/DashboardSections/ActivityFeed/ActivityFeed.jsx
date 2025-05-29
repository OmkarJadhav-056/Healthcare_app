import React from 'react'
import { barData, days } from "../../../data/mockData";
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => {

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>Activity</span>
        <span className={styles.subtitle}>3 appointment on this week</span>
      </div>
      <div className={styles.chart}>
        {barData.map((dayBars, index) => (
          <div className={styles.day} key={index}>
            <div className={styles.bars}>
              {dayBars.map((height, i) => (
                <div
                  key={i}
                  className={`${styles.bar} ${styles[`color${i + 1}`]}`}
                  style={{ height: `${height}rem` }}
                />
              ))}
            </div>
            <span className={styles.dayLabel}>{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
