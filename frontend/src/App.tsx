import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './screens/Home'
import About from './screens/About'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <>
      <Navigation />
      <Switch location={location} key={location.key}>
        <Route exact path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
