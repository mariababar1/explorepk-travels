import { useState } from "react";

import hunza from "../assets/images/hunza.jpg";
import skardu from "../assets/images/skardu.jpg";
import nelum from "../assets/images/nelum.jpg";
import saif from "../assets/images/saifulmalook.jpg";

function Packages() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      title: "Hunza Royal Escape",
      location: "Hunza Valley",
      category: "mountains",
      price: "45,000",
      duration: "5 Days / 4 Nights",
      image: hunza,
      rating: "4.9",
      description:
        "Experience the breathtaking beauty of Hunza Valley with majestic mountains, peaceful villages and unforgettable views.",
      features: [
        "Luxury Hotel Stay",
        "Daily Breakfast",
        "Private Transport",
        "Professional Guide",
      ],
    },

    {
      id: 2,
      title: "Skardu Grand Adventure",
      location: "Skardu",
      category: "adventure",
      price: "55,000",
      duration: "6 Days / 5 Nights",
      image: skardu,
      rating: "4.9",
      description:
        "Discover dramatic mountains, crystal-clear lakes and the spectacular landscapes of beautiful Skardu.",
      features: [
        "Premium Hotel",
        "Breakfast & Dinner",
        "Private Transport",
        "Sightseeing Tours",
      ],
    },

    {
      id: 3,
      title: "Neelum Nature Retreat",
      location: "Neelum Valley",
      category: "nature",
      price: "38,000",
      duration: "4 Days / 3 Nights",
      image: nelum,
      rating: "4.8",
      description:
        "Escape into lush green valleys, flowing rivers and peaceful mountain scenery in beautiful Neelum Valley.",
      features: [
        "Mountain Resort",
        "Breakfast Included",
        "Transport",
        "Valley Tours",
      ],
    },

    {
      id: 4,
      title: "Saif-ul-Malook Luxury Tour",
      location: "Naran, Kaghan",
      category: "nature",
      price: "32,000",
      duration: "4 Days / 3 Nights",
      image: saif,
      rating: "4.9",
      description:
        "Explore the magical Saif-ul-Malook Lake surrounded by spectacular peaks and breathtaking alpine beauty.",
      features: [
        "Luxury Accommodation",
        "Breakfast",
        "Private Transport",
        "Lake Visit",
      ],
    },
  ];

  const filteredPackages =
    activeTab === "all"
      ? packages
      : packages.filter((item) => item.category === activeTab);

  // BOOK JOURNEY FUNCTION
  const handleBookJourney = () => {
    // Close package modal
    setSelectedPackage(null);

    // Smoothly scroll to Booking section
    setTimeout(() => {
      const bookingSection = document.getElementById("booking");

      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section className="packages" id="packages">

      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}

      <div className="packages-glow glow-one"></div>
      <div className="packages-glow glow-two"></div>

      <div className="packages-airplane airplane-one">✈</div>
      <div className="packages-airplane airplane-two">✈</div>

      <div className="packages-star star-one">✦</div>
      <div className="packages-star star-two">✧</div>
      <div className="packages-star star-three">✦</div>
      <div className="packages-star star-four">✧</div>


      {/* =========================
          HEADING
      ========================== */}

      <div className="packages-heading">

        <div className="heading-eyebrow">
          <span></span>
          EXPLORE OUR JOURNEYS
          <span></span>
        </div>

        <h1>
          Choose Your
          <br />
          <em>Perfect Escape</em>
        </h1>

        <p>
          Discover our carefully designed travel experiences and
          explore the most breathtaking destinations of Pakistan.
        </p>

      </div>


      {/* =========================
          LUXURY STATS
      ========================== */}

      <div className="packages-stats">

        <div className="package-stat">
          <strong>04</strong>
          <span>Luxury Packages</span>
        </div>

        <div className="package-stat-line"></div>

        <div className="package-stat">
          <strong>4.9</strong>
          <span>Traveler Rating</span>
        </div>

        <div className="package-stat-line"></div>

        <div className="package-stat">
          <strong>24/7</strong>
          <span>Travel Support</span>
        </div>

      </div>


      {/* =========================
          FILTER BUTTONS
      ========================== */}

      <div className="package-tabs">

        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All Journeys
        </button>

        <button
          className={activeTab === "mountains" ? "active" : ""}
          onClick={() => setActiveTab("mountains")}
        >
          Mountains
        </button>

        <button
          className={activeTab === "adventure" ? "active" : ""}
          onClick={() => setActiveTab("adventure")}
        >
          Adventure
        </button>

        <button
          className={activeTab === "nature" ? "active" : ""}
          onClick={() => setActiveTab("nature")}
        >
          Nature
        </button>

      </div>


      {/* =========================
          PACKAGE CARDS
      ========================== */}

      <div className="packages-grid">

        {filteredPackages.map((item, index) => (

          <article
            className="package-card"
            key={item.id}
            style={{
              animationDelay: `${index * 0.12}s`,
            }}
          >

            {/* IMAGE */}

            <div className="package-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="package-image-overlay"></div>

              <span className="package-number">
                0{item.id}
              </span>

              <span className="package-location">
                📍 {item.location}
              </span>

              <span className="package-rating">
                ★ {item.rating}
              </span>

            </div>


            {/* CONTENT */}

            <div className="package-content">

              <span className="package-duration">
                ✈ {item.duration}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>


              {/* FEATURES */}

              <div className="package-features">

                {item.features.slice(0, 2).map((feature) => (

                  <span key={feature}>
                    ✓ {feature}
                  </span>

                ))}

              </div>


              {/* BOTTOM */}

              <div className="package-bottom">

                <div className="package-price">

                  <small>STARTING FROM</small>

                  <strong>
                    PKR {item.price}
                  </strong>

                </div>

                <button
                  className="package-button"
                  onClick={() => setSelectedPackage(item)}
                >
                  Explore
                  <span>↗</span>
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* =========================
          BOTTOM MESSAGE
      ========================== */}

      <div className="packages-footer">

        <div className="footer-line"></div>

        <span>
          ✈ YOUR NEXT ADVENTURE STARTS HERE
        </span>

        <div className="footer-line"></div>

      </div>


      {/* =========================
          PACKAGE MODAL
      ========================== */}

      {selectedPackage && (

        <div
          className="package-modal-overlay"
          onClick={() => setSelectedPackage(null)}
        >

          <div
            className="package-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="package-modal-close"
              onClick={() => setSelectedPackage(null)}
            >
              ×
            </button>


            {/* MODAL IMAGE */}

            <div className="package-modal-image">

              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
              />

              <div className="package-modal-image-overlay"></div>

              <div className="package-modal-image-text">

                <span>
                  ✈ EXPLORE PAKISTAN
                </span>

                <h2>
                  {selectedPackage.title}
                </h2>

              </div>

            </div>


            {/* MODAL CONTENT */}

            <div className="package-modal-content">

              {/* TOP */}

              <div className="modal-top">

                <span>
                  📍 {selectedPackage.location}
                </span>

                <span>
                  ★ {selectedPackage.rating}
                </span>

              </div>


              {/* DURATION */}

              <div className="modal-duration">
                ✈ {selectedPackage.duration}
              </div>


              {/* DESCRIPTION */}

              <p>
                {selectedPackage.description}
              </p>


              {/* FEATURES */}

              <div className="modal-features">

                {selectedPackage.features.map((feature) => (

                  <div key={feature}>

                    <span>✓</span>

                    {feature}

                  </div>

                ))}

              </div>


              {/* MODAL BOTTOM */}

              <div className="modal-bottom">

                <div>

                  <small>
                    PACKAGE PRICE
                  </small>

                  <strong>
                    PKR {selectedPackage.price}
                  </strong>

                </div>


                {/* BOOK JOURNEY BUTTON */}

                <button
                  className="modal-book-button"
                  onClick={handleBookJourney}
                >
                  Book This Journey
                  <span>↗</span>
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Packages;