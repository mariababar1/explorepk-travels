import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import Auth from "./components/Auth";

import Destinations from "./pages/destination";
import Packages from "./pages/packages";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/contact";
import Booking from "./pages/booking2";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="destinations">
        <Destinations />
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="booking">
        <Booking />
      </section>
    </>
  );
}

export default App;