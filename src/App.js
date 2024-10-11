import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Footer from "./layouts/footer";
import Footer2 from "./layouts/footer2";
import { IoLogoWhatsapp } from "react-icons/io";
import Home from "./pages/home/Home";
import TawkToChat from "./components/tawk";

import About from "./pages/about/About";
import HowItsWork from "./pages/howitwork/HowItsWork";
import Faq from "./pages/faq/Faq";
import Prices from "./pages/prices/Prices";
import Question from "./pages/question/Question";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const urls = [
    "/prices",
    "/blog",
    "/faq",
    "/about",
    "/How-it-Works",
    "/teas-exact",
  ];

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/How-it-Works" element={<HowItsWork />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/prices" element={<Prices />} />
        <Route exact path="/teas-exact" element={<Question />} />
      </Routes>

      {urls.includes(location.pathname) ? <Footer2 /> : <Footer />}

      <div className="fixed left-5 bottom-5 flex  ">
        <a
          href="https://api.whatsapp.com/send?phone=15795011983&text=Hello%2C%0AI%20need%20assistance%20with%20my%20teas%20exam."
          className=" p-2 px-5 gap-3 w-full   bg-[#25D366] shadow-lg  rounded-full flex justify-center items-center    "
        >
          <IoLogoWhatsapp className="sm:size-6  text-white  " />
          <p className="text-white text-sm sm:text-lg font-bold">
            Need Help with ATI teas 7 Test now ?
          </p>
        </a>
        <TawkToChat />
      </div>
    </>
  );
}

export default App;
