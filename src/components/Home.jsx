import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Introduction from './Introduction'
import ContactForm from './ContactForm'
import Pdf from './Pdf'
function Home() {
  return (
    <>
        <div className="background-image bg-fixed">
   <Header/>
   <Introduction />
    </div>
    <Pdf/>
    <ContactForm/>
   <Footer/>
    </>
  )
}

export default Home
