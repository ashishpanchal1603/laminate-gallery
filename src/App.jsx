import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
    <div className="background-image bg-fixed h-[100vh]">
   <Header/>
   <Introduction className="h-auto"/>
    </div>
    <ContactForm/>
   <Footer/>
    </>
  )
}

export default App
