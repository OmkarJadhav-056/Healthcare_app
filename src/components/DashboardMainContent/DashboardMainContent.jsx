import React from 'react'
import style from './DashboardMainContent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faMagnifyingGlassPlus, faArrowRightLong, faExpand } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets';
import ActivityFeed from '../DashboardSections/ActivityFeed/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className={style.main}>
      <div className={style.box}>
        <div className={style.head}>
          <h2>Dashboard</h2>
          <p>This week <i><FontAwesomeIcon icon={faAngleDown} /></i></p>
        </div>

        <div className={style.content}>
          {/* AnatomySection */}
          <div id={style.left}>
            <i id={style.search}><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></i>
            <div id={style.heart}>
              <i><FontAwesomeIcon icon={faExpand} /></i>
              <div id={style.up}>
                <p>❤️ Healthy Heart</p>
              </div>
            </div>
            <div id={style.leg}>
              <div id={style.down}>
                <p>🦵 Healthy Leg</p>
              </div>
              <i><FontAwesomeIcon icon={faExpand} /></i>
            </div>
          </div>

          {/* HealthStatusCards  */}
          <div id={style.right}>
            <div className={style.card}>
              <div className={style.top}>
                <img src={assets.heart_icon} alt="" />
                <span>Lungs</span>
              </div>
              <p>Date: 26 Aug 2022</p>
              <div id={style.bottom}>
                <div id={style.brown}></div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.top}>
                <img id={style.teeth} src={assets.teeth_icon} alt="" />
                <span>Teeth</span>
              </div>
              <p>Date: 26 Aug 2022</p>
              <div id={style.bottom}>
                <div id={style.skyblue}></div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.top}>
                <img src={assets.bone_icon} alt="" />
                <span>Bone</span>
              </div>
              <p>Date: 26 Aug 2022</p>
              <div id={style.bottom}>
                <div id={style.orange}></div>
              </div>
            </div>
            <p id={style.details}>Details <span><FontAwesomeIcon icon={faArrowRightLong} /></span></p>
          </div>
        </div>

        {/* ActivityFeed  */}
        <div className={style.activity}>
          <ActivityFeed />
        </div>

      </div>
    </div>
  )
}

export default DashboardMainContent
