import  { useEffect, useRef } from 'react'
import Typed from "typed.js";
import Sofa from "../assets/sofa1.jpg"
function Introduction() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Laminate", "Veneer", "Plywood", "Cne", "Shera", "Corian","Charcoal"],
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
    <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Laminate</h2>
    <div className="grid grid-cols-12 gap-4 items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold col-span-6 lg:col-span-6"> 
        We specialize in <span className="multiple-text text-green-400" ref={typedElement}></span>
      </h1>
      
      {/* Image */}
      <div className="col-span-6 sm:col-span-3 lg:col-span-6">
        <img src={Sofa} alt="sofa" className="w-full h-auto bg-cover" />
      </div>
    </div>
    </>
  )
}

export default Introduction