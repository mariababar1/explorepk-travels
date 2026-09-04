import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Destinations from "./pages/destination";
import Packages from "./pages/packages";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/contact";
import Booking from "./pages/booking2";

function App() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* DESTINATIONS */}
      <section id="destinations">
        <Destinations />
      </section>

      {/* PACKAGES */}
      <section id="packages">
        <Packages />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* BOOKING */}
      <section id="booking">
        <Booking />
      </section>
    </>
  );
}

export default App;