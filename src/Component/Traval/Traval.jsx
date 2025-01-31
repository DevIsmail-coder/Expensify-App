import React from 'react'
import "./Traval.css"
// import Button from '../Button/Button'


const Traval = () => {
  return (
    <div className='Travalbody'>

    <div className='Travalbodymain'>
      <h2 className='TravelH2'>Travel</h2>
        <p className='TravelP'>Filling The Correct Information Below To Get Your Daily</p>
        <p className='TravelP'>Expenses On Food</p>
        <h4 className='TravelH4'>Input Description</h4>
        <input className='TravelInput' type="text" placeholder='items'/>
        <h4 className='TravelH4'>Input Price</h4>
        <input className='TravelInput' type="text" placeholder='$000'/>
        <h4 className='TravelH4'>Input Date</h4>
        <input className='TravelInputDate' type="text" placeholder='27/01/2025'/>
        <input className='TravelInputTotal' type="text" placeholder='$180,000'/>
      {/* <Button /> */}
    </div>
  </div>
  )
}

export default Traval