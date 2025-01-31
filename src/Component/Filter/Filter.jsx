import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='Filterbody'>
      <article className='Filtercontainer1'>
        <span className='Filtercontainer1div'>
            <h3 className='Filtercontainer1h3'>Features</h3>
            <span className='Filtercontainer1list'>
                <p>Expense Management</p>
                <p>Spend Management</p>
                <p>Expense Reports</p>
                <p>Company Credit Card</p>
                <p>Receipt Scanning App</p>
                <p>Bill Pay</p>
                <p>Invoicing</p>
                <p>ayroll</p>
                <p>Travel</p>
            </span>
        </span>
        <span className='Filtercontainer1div'>
            <h3 className='Filtercontainer1h3'>Resources</h3>
            <span className='Filtercontainer1list'>
                <p>ExpensifyApproved!</p>
                <p>Press Kit</p>
                <p>Support</p>
                <p>ExpensifyHelp</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
            </span>
        </span>

        <span className='Filtercontainer1div'>
            <h3 className='Filtercontainer1h3'>Learn more</h3>
            <span className='Filtercontainer1list'>
                <p>About Expensify</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Expensify.com</p>
                <p>Investor Relations</p>
            </span>
        </span>

        <span className='Filtercontainer1div'>
            <h3 className='Filtercontainer1h3'>Teams</h3>
            <span className='Filtercontainer1list'>
                <p>Taofik Ahmed</p>
                <p>Ismail Muhammed</p>
                <p>Christian Ichiogu</p>
                <p>Joshua Saleh</p>
            </span>
        </span>
      </article>
      <article className='Filtercontainer2'>
        <p className='Filtercontainer2ptag'>
        The Expensify Visa® Commercial Card is issued by The Bancorp Bank, N.A. pursuant 
        to a license from Visa U.S.A. Inc. and may not be used at all merchants that accept 
        Visa cards. Apple® and the Apple logo® are trademarks of Apple Inc., registered in the U.S. 
        and other countries. App Store is a service mark of Apple Inc. Google Play and the 
        Google Play logo are trademarks of Google LLC.
        </p>
      </article>
    </div>
  )
}

export default Filter
