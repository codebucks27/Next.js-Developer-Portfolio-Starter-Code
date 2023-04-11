import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`wfull h-full inline-block z-0 bg-light p-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout