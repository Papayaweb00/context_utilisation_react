import React, { useContext } from 'react'
import { PoliceContext, ThemeContext } from './ThemeContext'

function AfficheTheme() {
    const theme = useContext(ThemeContext)
    const police = useContext(PoliceContext)

  return (
    <div className='App' style={{fontSize: '1.7em'}}>
      <p>
        Theme: {theme}
      </p>
      <p>
        Police: {police}
      </p>
    </div>
  )
}

export default AfficheTheme
