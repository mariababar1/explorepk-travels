import PremiumFeatures from "./components/PremiumFeatures";
import AITravelAssistant from "./components/AITravelAssistant";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import TravelPopup from "./components/TravelPopup";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";

import Destinations from "./pages/destination";
import Packages from "./pages/packages";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/contact";
import Booking from "./pages/booking2";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [showTopButton, setShowTopButton] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  console.log("CURRENT USER:", user);

  // ================= LOADING =================

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // ================= LOGIN =================

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);

    localStorage.setItem(
      "explorepkUser",
      JSON.stringify(loggedInUser)
    );
  };

  // ================= CHECK SAVED USER =================

  useEffect(() => {
    const savedUser = localStorage.getItem("explorepkUser");

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.log("Saved user error:", error);
        localStorage.removeItem("explorepkUser");
      }
    }
  }, []);

  // ================= SHOW BACK TO TOP =================

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= SMOOTH SCROLL =================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ================= ADMIN DASHBOARD =================

  if (showAdminDashboard) {
    return (
      <AdminDashboard
        onBackToWebsite={() => {
          setShowAdminDashboard(false);
        }}
      />
    );
  }

  // ================= LOADING =================

  if (isLoading) {
    return (
      <LoadingScreen
        onComplete={handleLoadingComplete}
      />
    );
  }

  // ================= NORMAL WEBSITE =================

  return (
    <>
      {/* TOP TRAVEL TICKER */}

      <div className="travel-ticker">
        <div className="travel-ticker-track">

          <span>
            ✦ EXPLORE PAKISTAN
          </span>

          <span>
            ✦ LUXURY TRAVEL EXPERIENCES
          </span>

          <span>
            ✦ DISCOVER BEAUTIFUL DESTINATIONS
          </span>

          <span>
            ✦ PLAN YOUR JOURNEY WITH EXPLOREPK
          </span>

          <span>
            ✦ EXPLORE PAKISTAN
          </span>

          <span>
            ✦ LUXURY TRAVEL EXPERIENCES
          </span>

          <span>
            ✦ DISCOVER BEAUTIFUL DESTINATIONS
          </span>

          <span>
            ✦ PLAN YOUR JOURNEY WITH EXPLOREPK
          </span>

        </div>
      </div>

      {/* NAVBAR */}

      <Navbar />

      {/* FLOATING TRAVEL POPUPS */}

      <TravelPopup />

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

      {/* PREMIUM FEATURES */}

      <PremiumFeatures />

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
        <Booking
          user={user}
          onLogin={handleLogin}
        />
      </section>

      {/* ADMIN DASHBOARD BUTTON */}

      <button
        className="admin-dashboard-access"
        onClick={() => {
          setShowAdminDashboard(true);

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        ⚙ Admin Dashboard
      </button>

      {/* WHATSAPP BUTTON */}

      <a
        href="https://wa.me/923359794426"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <span>☘</span>
      </a>

      {/* BACK TO TOP BUTTON */}

      {showTopButton && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* AI TRAVEL ASSISTANT */}

      <AITravelAssistant />
    </>
  );
}

export default App;