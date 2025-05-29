import React from 'react'
import Header from './components/Header/Header'
import './styles/App.css'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent'
import CalendarView from './components/DashboardSections/CalendarView/CalendarView'



const App = () => {
  return (
    <div className='main'>
      <div className="box">
        <section id='navbar'>
          <Header />
        </section>
        <section id='main-content'>
          <Sidebar />
          <DashboardMainContent />
          <CalendarView />
        </section>
      </div>
    </div>
  )
}

export default App
