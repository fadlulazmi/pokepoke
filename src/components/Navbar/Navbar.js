import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scoped.css'

export default function Navbar() {
  const home = '/'
  const myPokemon = '/myPokemon' 
  const [currentLocation, setCurrentLocation] = useState(location.pathname)
  useEffect(() => {
    console.log('.=============')
    setCurrentLocation(location.pathname)
  }, [location.pathname])
  return (
    <nav className="navbar">
      { currentLocation === home && <Link to={myPokemon}><p> My Pokemon </p></Link> }
      { currentLocation === myPokemon && <Link to={home}><p> Home </p></Link> }
    </nav>
  )
}
