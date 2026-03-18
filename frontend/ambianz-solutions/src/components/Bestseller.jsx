import React from 'react'
import Cards from './Cards'

const Bestseller = () => {
  return (
    <div className='bestseller '>
        <h3 className='font-bold'>Best Seller</h3>
        <Cards pname="Table" price="Rs.5000" />

    </div>
  )
}

export default Bestseller