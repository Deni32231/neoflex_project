import React from 'react'

export const Header = () => {
  return (
    <div className="header">
        <input type="text" className="header__input" placeholder="Search"/>
        <button className="header__search"><img src="/img/search.svg" alt="search" /></button>
        <a href="/" className="header__bell"><img src="/img/bell.svg" alt="bell" /></a>
        <img src="/img/user_img.jpg" alt="user" className="header__user-photo"/>
        <span className="header__user-name">Ivan Ivanov</span>
        <a href="/" className="header__log-out"><img src="/img/log_out.svg" alt="log_out" /></a>
    </div>
  )
}
