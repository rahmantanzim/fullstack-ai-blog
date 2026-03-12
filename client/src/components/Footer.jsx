import React from 'react'

const Footer = () => {
  return (
    <div className='p-6 bg-primary uppercase text-white text-center'>
        <h2 className='text-sm'>&copy; {new Date().getFullYear()} Tanzim Rahman</h2>
    </div>
  )
}

export default Footer