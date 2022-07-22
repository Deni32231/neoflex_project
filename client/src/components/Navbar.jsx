import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  return (
    <aside className="navbar">
      <nav>
        <NavLink to={'/'} href="/" className="navbar__logo"><img src="/img/logo.svg"  alt="logo" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item navbar__item-active"><img src="/img/home.svg"  alt="home" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item"><img src="/img/globe.svg"  alt="globe" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item"><img src="/img/archive.svg"  alt="archive" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item"><img src="/img/pie_chart.svg"  alt="pie_chart" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item"><img src="/img/dollar.svg"  alt="dollar" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item"><img src="/img/database.svg"  alt="database" /></NavLink>
        <NavLink to={'/'} href="/" className="navbar__item" ><img src="/img/navigation.svg"  alt="navigation" /></NavLink>
      </nav>
    </aside>
  )
}
