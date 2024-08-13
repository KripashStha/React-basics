import React from 'react'

const Card = (prop) => {
  return (
    <div className='bg-slate-100 p-4 max-w-sm rounded-2xl h-fit shadow-md border'>
        <h1 className='text-3xl font-bold mb-3'>{prop.name}</h1>
        <p>{prop.phone}</p>
        <p>{prop.email}</p>
        <p>{prop.address}</p>
    </div>
  )
}

export default Card