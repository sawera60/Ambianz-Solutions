import React from 'react'

const Cards = ({pname,price}) => {
  return (
    <div className='flex flex-col'>
        <img src="" alt="" />
        <p>{pname}</p>
        <p>{price}</p>
    </div>
  )
}

export default Cards