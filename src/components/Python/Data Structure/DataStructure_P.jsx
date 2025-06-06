import React from 'react'
import { Link } from 'react-router-dom'

export default function DataStructure() {
  return (
    <>
      <Link to="/Dictionaries"><p>Dictionaries</p></Link>
      <Link to="/Lists"><p>Lists</p></Link>
      <Link to="/Sets"><p>Sets</p></Link>
      <Link to="/Tuples"><p>Tuples</p></Link>

    </>
  )
} 