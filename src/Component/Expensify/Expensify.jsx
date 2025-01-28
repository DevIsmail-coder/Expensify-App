import React, { useState } from 'react'
import './Expensify.css'
import Categories from '../Categories/Categories'
import Filter from '../Filter/Filter'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Food from '../Food/Food'
import Traval from '../Traval/Traval'
import Entertainment from '../Entertainment/Entertainment'
import { Landcontext } from '../Contexts'

const Expensify = () => {
  const [showPage, setShowPage] = useState("entertainment")
  
  return (
    <div className='Expensifybody'>
      <Landcontext.Provider value={{setShowPage}}> 
      {showPage === "login" && <Login />}
      {showPage === "signup" &&  <Signup />}
      {showPage === "food" &&  <Food/>}
      {showPage === "traval" && <Traval />}
      {showPage === "entertainment" && <Entertainment />}
      </Landcontext.Provider>

      <article className='Expensifyheader'>
        <h2 className='Expensifyheaderh2'>Expensify</h2>
      <article className='Expensifyheadspanbut'>
      <button className='Expensifyheaderbut1' onClick={() => setShowPage("login")}>Login</button>
      <button className='Expensifyheaderbut2' onClick={() => setShowPage("signup")}>Sign in</button>
      </article>
      </article>
      <div className='Expensifycontainer1'>
        <article className='Expensifycontainer1div1'>
          <h2 className='Expensifycontainer1div1h2'>Financial services companies spend <span className='span'>50% </span>
            less time on expense management with <span className='span'>Expensify</span>
          </h2>
        </article>
        <article className='Expensifycontainer1div2'>
          <img src='./logo-removebg-preview.png' className='Expensifycontainer1div2img' />
        </article>
      </div>
      <ul className='Expensifycontainer2'>
        <li className='Expensifycontainer2li'>
          Expenses. Upload receipts via mobile app or email. Auto-capture merchant
          details, price, etc. Reimburse in a few clicks.
        </li>
        <li className='Expensifycontainer2li'>Invoices & Bill Pay. Send invoices. Auto-capture details from bills.
          Automate approvals, payments, and tracking.</li>
        <li className='Expensifycontainer2li'>Management. Generate reports. Manage travel costs. Auto-reconcile cards.
          Sync with your ERP. NetSuite, Dynamics, etc.</li>
      </ul>
      <div className='Expensifycontainer3'>
        <Categories />
      </div>
      <Filter />
    </div>
  )
}

export default Expensify
