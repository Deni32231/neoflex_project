import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { createClaim } from '../redux/features/claim/claimSlice'

export const AddClaim = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const status = 'new'
  const dispath = useDispatch()
  


  const submitHandler = () => {
    try {
      dispath(createClaim({title, description, type, status}))
      setTitle('')
      setDescription('')
      setType('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex_container">
      <Navbar />

      <div className="container">
        <Header />
        <div className="width_container">
          <div className="claims_header">
            <span className="claims_header_text">Creating new claim</span>
          </div>
          <div className="add_claim_form">
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="add__form__label">
            TITLE
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Type claim title' className="input_title"/>
            </label>
            <label className="add__form__label">
            TYPE
              <select name="type" id="type" value={type} onChange={e => setType(e.target.value)}>
                <option value="Hardware">Hardware</option>
                <option>Software</option>
                <option>Troubleshooting</option>
                <option>Networking</option>
              </select>
            </label>
            <label className="add__form__label">
            DESCRIPTION
              <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Type claim description' className="input_description"/>
            </label>
            <NavLink to={'/'} href="/" className="cancel_btn">Cancel</NavLink>
            <button className="create_btn" onClick={submitHandler}>Create</button>
          </form>
          </div>
        </div>
      </div>
      </div>
  )
}
