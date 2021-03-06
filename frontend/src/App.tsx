import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './screens/Home'
import About from './screens/About'
import './App.css'
import Solutions from './screens/Solutions'
import AttackVectors from './screens/AttackVectors'

function App() {
  const location = useLocation()

  return (
    <>
      <Navigation />
      <Switch location={location} key={location.key}>
        <Route exact path='/solutions' component={Solutions} />
        <Route exact path='/about' component={About} />
        <Route exact path='/vectors' component={AttackVectors} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
