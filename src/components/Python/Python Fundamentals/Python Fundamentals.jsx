import React from 'react'
import { Link } from "react-router-dom";
export default function PythonFundamentals() {
  return (
    <>
        <Link to="/Introduction"><p>Introduction</p></Link>
        <Link to="/GettingStarted"><p>Getting Started</p></Link>
        <Link to="/Syntax"><p>Syntax</p></Link>
        <Link to="/UserInput"><p>User Input</p></Link>
        <Link to="/Operators"><p>Operators</p></Link>
        <Link to="/ControlConstructs"><p>Control Constructs</p></Link>
        <Link to="/Functions"><p>Functions</p></Link>
    </>
  )
}
