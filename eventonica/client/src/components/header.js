import React from 'react'
import calendar from '../calendar.png'


const Header = () => {
  return (
    <div>
      <header>
        <img src={calendar} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>
    </div>
  )
}

export default Header