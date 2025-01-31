import React from 'react'
import './Entertainment.css'
// import Button from '../Button/Button'

const Entertainment = () => {
  return (
    <div className='Entertainmentbody'>
      <div className='Entertainmentbodymain'>
        <h2 className='EntertainmentH2'> Entertainment</h2>
        <p className='EntertainmentP'>Filling The Correct Information Below To Get Your Daily</p>
        <p className='EntertainmentP'>Expenses On Food</p>
        <h4 className='EntertainmentH4'>Input Description</h4>
        <input className='EntertainmentInput' type="text" placeholder='item'/>
        <h4 className='EntertainmentH4'>Input Price</h4>
        <input className='EntertainmentInput' type="text" placeholder='$000'/>
        <h4 className='EntertainmentH4'>Input Date</h4>
        <input className='EntertainmentInputDate' type="text" placeholder='27/01/2025'/>
        <input className='EntertainmentInputTotal' type="text" placeholder='$180,000'/>
        {/* <Button /> */}
      </div>
    </div>
  )
}

export default Entertainment