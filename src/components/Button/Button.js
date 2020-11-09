import React from 'react'
import './styles.scoped.css'

export default function Button({onClick, text}) {
  return (
    <button className="button" onClick={onClick}>{text}</button>
  )
}
