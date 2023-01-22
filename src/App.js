import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Menu from "./components/Menu/Menu.js";
import MapSection from "./components/MapSection/MapSection.js";
import Booking from "./components/Booking/Booking.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import "./fonts/Osake-x3oqj.otf"

function App() {

  const [scroll, setScroll ] = useState();

  const startRef = useRef();
  const menuRef = useRef();
  const mapRef = useRef();
  const bookingRef = useRef();

  useEffect(() => {
    if(scroll == "start") {
      startRef.current.scrollIntoView({behavior: "smooth"})
    }
    if(scroll == "menu") {
      menuRef.current.scrollIntoView({behavior: "smooth", block: "end"})
    }
    if(scroll == "map") {
      mapRef.current.scrollIntoView({behavior: "smooth", block: "end"})
    }
    if(scroll == "booking") {
      bookingRef.current.scrollIntoView({behavior: "smooth", block: "end"})
    }
  }, [scroll])

  return (
      <BrowserRouter>
        <Navbar click={setScroll} />
        <Hero ref={startRef} />
        <Menu ref={menuRef} />
        <MapSection ref={mapRef} />
        <Booking ref={bookingRef} />
      </BrowserRouter>
  )
}

export default App;
