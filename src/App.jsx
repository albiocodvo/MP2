import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import LetsTalk from "./Components/LetsTalk/LetsTalk";
import WhatWeOffer from "./Components/WhatWeOffer/WhatWeOffer";
import Reviews from "./Components/Reviews/Reviews"
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


function App () {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <WhoWeAre />
          <Reviews />
          <LetsTalk />
          <Footer />
          </>
        } />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
      </Routes>
    </Router>
  )
}

export default App