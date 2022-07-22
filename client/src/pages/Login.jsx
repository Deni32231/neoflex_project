import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/features/auth/authSlice'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    try {
        dispath(loginUser({email, password}))
        setPassword('')
        setEmail('')
        navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="login__container">
        <div className="login__picture">
          <img src="/img/login_img.png" alt="" />
        </div>
        <div className="login__form">
          <img src="/img/login_ico.svg" alt="" />
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="login__form__label">
            E-MAIL
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Type your e-mail' className="input_email"/>
            </label>
            <label className="login__form__label">
            PASSWORD
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Type your password' className="input_password"/>
            </label>
            <label className="login_label_checkbox">
              <input type="checkbox" />
              Keep me logged in
            </label>
            <button type="submit" onClick={handleSubmit} className="login_form_btn">Login</button>
          </form>
          <span className="login_register_text">Not a member? <a href="/register">Request registration.</a></span>
        </div>
      </div>
      <footer className="login__footer">
        <img src="/img/logo.svg" alt="logo"/>
      </footer>
    </div>
  )
}
