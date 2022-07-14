import React from 'react'

const Footer = () => {
  return (
    <div style={{ marginTop: "24rem"}}>
      <nav className='justify-content-center bg-dark p-4 fixed-botom'>
        <p className='text-light text-center'>Copyright {new Date().getFullYear()}</p>
        <p className='text-info text-end'>Created By E.Team</p>
      </nav>
    </div>
  )
}

export default Footer;