import React from 'react'
import '../App.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <h1>Lost Your Way?</h1>
      <Link to ='/'>
        <button>RETURN TO HOME PAGE</button>
      </Link>
    </div>
  )
}

export default Error
