import React, { useState } from 'react'
import './style.css'

const DarkMode = () => {
  const [mode, setMode] = useState(false)
  const onClickHandler = () => {
    setMode(!mode)
  }

  return (
    <div className='toggle-btn'>
      <h1 style={{ color: `${mode ? '#111' : '#111'}` }} className='toggle-text'>
        {mode ? 'Dark mode' : 'Light Mode'}
      </h1>
      <button
        className='toggle'
        onClick={onClickHandler}
        style={{ background: `${mode ? 'rgba(255,255,255,1)' : '#333'}` }}
      >
        <div
          className='btn'
          style={{
            marginLeft: `${mode ? '53px' : '2px'}`,
            background: `${mode ? '#333' : '#fff'}`
          }}
        />
      </button>
    </div>
  )
}

export default DarkMode
