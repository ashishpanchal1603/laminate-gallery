import {  Routes, Route } from "react-router";
import ViewPdf from './components/viewPdf';
import Home from './components/Home';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/view-pdf" element={<ViewPdf />} />
    </Routes>
    </>
  )
}

export default App
