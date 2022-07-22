import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { NavLink } from 'react-router-dom'

export const AllClaims = () => {
  return (
    <div className="flex_container">
      <Navbar />

      <div className="container">
        <Header />
        <div className="width_container">
          <div className="claims_header">
            <span className="claims_header_text">Your claims</span>
            <NavLink to={'/add_claim'} href="/" className="create_claim">+ Create claim</NavLink>
          </div>
        </div>
        
      </div>
    </div>
  )
}
