import React from 'react'
import './Expensify.css'
import Categories from '../Categories/Categories'
import Filter from '../Filter/Filter'

const Expensify = () => {
  return (
    <div className='Expensifybody'>
      <article className='Expensifyheader'>
        <h2 className='Expensifyheaderh2'>Expensify</h2>
        <button className='Expensifyheaderbut'>Sign in</button>
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
