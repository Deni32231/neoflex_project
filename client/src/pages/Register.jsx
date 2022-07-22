import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../redux/features/auth/authSlice'

export const Register = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispath = useDispatch()
  const navigate = useNavigate('/')

  const handleSubmit = () => {
    try {
        dispath(registerUser({fullName, email, password}))
        setPassword('')
        setEmail('')
        setFullName('')
        navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container register_container'>
      <img src="/img/login_ico.svg" alt="" />
      <form onSubmit={(e) => e.preventDefault()} className="register_form">
        <label>LAST NAME AND FIRST NAME <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder='Type your last name and first name'/></label>
        <label>E-MAIL<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Type your e-mail"/></label>
        <label>PASSWORD<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Type your password'/></label>
        {/* <label>REPEAT PASSWORD<input type="password" placeholder='Repeat your password'/></label> */}
        <button type="submit" onClick={handleSubmit} className="login_form_btn">Register</button>
      </form>
    </div>
  )
}
