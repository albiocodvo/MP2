import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import LetsTalk from "./Components/LetsTalk/LetsTalk";
import ForApplicants from "./Components/WhatWeOffer/ForApplicants/ForApplicants";
import ForEmployers from "./Components/WhatWeOffer/ForEmployers/ForEmployers";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
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
        {/* <Route path="/what-we-offer" element={<ForApplicants />} /> */}
        <Route path="/what-we-offer/employers" element={<ForEmployers />} />
        <Route path="/what-we-offer/applicants" element={<ForApplicants />} />
      </Routes>
    </Router>
  );
}

export default App;
