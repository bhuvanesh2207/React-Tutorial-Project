import React from 'react'
import { Link } from 'react-router-dom'

export default function DjangoFramework() {
  return (
    <>
      <Link to="/DjangoIntro_P"><p>Django Intro</p></Link>
      <Link to="/DjangoModels_P"><p>Django Models</p></Link>
      <Link to="/DjangoViews_P"><p>Django Views</p></Link>

    </>
  )
} 