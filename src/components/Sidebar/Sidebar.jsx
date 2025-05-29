import React from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faUpLong, faDownLong, faCalendarDays, faBriefcaseMedical, faBolt, faSquare, faCommentDots, faPhone, faGear } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <h5>General</h5>
        <p className={style.menu} id={style.active} ><span><FontAwesomeIcon icon={faQrcode} /></span>Dashboard</p>
        <p className={style.menu}><span><FontAwesomeIcon icon={faUpLong} /><FontAwesomeIcon icon={faDownLong} /></span>History</p>
        <p className={style.menu}><span><FontAwesomeIcon icon={faCalendarDays} /></span>Calender</p>
        <p className={style.menu}><span><FontAwesomeIcon icon={faBriefcaseMedical} /></span>Appointments</p>
        <p className={style.menu}><span className="fa-layers fa-fw" style={{ fontSize: "0.8rem" }}>
          <FontAwesomeIcon icon={faSquare} />
          <FontAwesomeIcon icon={faBolt} transform="shrink-6" style={{ color: "white" }} />
        </span>Statistics</p>

        <h5 id={style.center}>Tools</h5>
        <p className={style.menu}><span><FontAwesomeIcon icon={faCommentDots} /></span>Chat</p>
        <p className={style.menu}><span><FontAwesomeIcon icon={faPhone} /></span>Support</p>

        <p id={style.bottom} className={style.menu}><span><FontAwesomeIcon icon={faGear} /></span>Support</p>

      </div>
    </div>
  )
}

export default Sidebar
