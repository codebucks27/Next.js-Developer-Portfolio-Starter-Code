import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <Layout >
        <span>Rights</span>
        <Link>JoaoCode</Link>
        <Link>Say Hello!</Link>
      </Layout>
    </footer>
  )
}

export default Footer