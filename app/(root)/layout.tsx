import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
    </div>
  )
}

export default layout