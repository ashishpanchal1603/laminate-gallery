import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";

function Introduction() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Laminate", "Veneer", "Playwood", "Cne", "Shera", "Corian","Charcoal"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed instance on component unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className='flex flex-col h-[100vh]'>
    <h2 className="text-3xl font-bold mb-4">Welcome to Laminate</h2>
    <h1 className='text-4xl font-bold'> We specialize in <span className="multiple-text text-green-400" ref={typedElement}></span></h1>
    </div>
    </>
  )
}

export default Introduction