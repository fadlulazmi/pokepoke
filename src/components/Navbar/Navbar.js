import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scoped.css'

export default function Navbar() {
  const home = '/'
  const myPokemon = '/myPokemon'
  return (
    <nav className="navbar">
      <Link to={home}><p> Home </p></Link>
      <Link to={myPokemon}><p> My Pokemon </p></Link>
    </nav>
  )
}
