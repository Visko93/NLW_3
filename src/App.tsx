import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import './styles/global.styles.css'
import './styles/pages/home.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
