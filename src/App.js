import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Menu from "./components/Menu/Menu.js";
import MapSection from "./components/MapSection/MapSection.js";
import Booking from "./components/Booking/Booking.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Menu />
        <MapSection />
        <Booking />
      </BrowserRouter>
  )
}

export default App;
