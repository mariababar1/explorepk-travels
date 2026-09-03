
import { useEffect, useState } from "react";
import hunza from "../assets/images/hunza.jpg";
import skardu from "../assets/images/skardu.jpg";
import nelum from "../assets/images/nelum.jpg";
import saif from "../assets/images/saifulmalook.jpg";
import map from "../assets/images/map.jpg";

function Destinations() {
  const [destinations, setDestinations] = useState(0);
  const [rating, setRating] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    let destinationTimer;
    let ratingTimer;

    let destinationCount = 0;
    let ratingCount = 0;

    destinationTimer = setInterval(() => {
      destinationCount += 1;

      if (destinationCount >= 10) {
        destinationCount = 10;
        clearInterval(destinationTimer);
      }

      setDestinations(destinationCount);
    }, 100);

    ratingTimer = setInterval(() => {
      ratingCount += 0.1;

      if (ratingCount >= 4.9) {
        ratingCount = 4.9;
        clearInterval(ratingTimer);
      }

      setRating(Number(ratingCount.toFixed(1)));
    }, 80);

    return () => {
      clearInterval(destinationTimer);
      clearInterval(ratingTimer);
    };
  }, []);

  return (
    <section className="destinations" id="destinations">

      {/* =================================================
          LARGE MAP - LEFT
      ================================================= */}

      <div className="destination-map map-left">

        <img src={map} alt="" />

        <div className="map-overlay"></div>

        <div className="map-route route-left">
          <span className="route-dot"></span>
          <span className="route-dot"></span>
          <span className="route-dot"></span>
        </div>

        <div className="map-pin pin-hunza">
          <span></span>
          <small>HUNZA</small>
        </div>

        <div className="map-pin pin-skardu">
          <span></span>
          <small>SKARDU</small>
        </div>

      </div>


      {/* =================================================
          LARGE MAP - RIGHT
      ================================================= */}

      <div className="destination-map map-right">

        <img src={map} alt="" />

        <div className="map-overlay"></div>

        <div className="map-route route-right">
          <span className="route-dot"></span>
          <span className="route-dot"></span>
          <span className="route-dot"></span>
        </div>

        <div className="map-pin pin-neelum">
          <span></span>
          <small>NEELUM</small>
        </div>

        <div className="map-pin pin-naran">
          <span></span>
          <small>NARAN</small>
        </div>

      </div>


      {/* =================================================
          LARGE AIRPLANES
      ================================================= */}

      <div className="destination-airplane airplane-left">
        ✈
      </div>

      <div className="destination-airplane airplane-right">
        ✈
      </div>


      {/* =================================================
          FLIGHT TRAILS
      ================================================= */}

      <div className="flight-trail trail-one"></div>

      <div className="flight-trail trail-two"></div>


      {/* =================================================
          LARGE COMPASS
      ================================================= */}

      <div className="destination-compass">

        <div className="compass-inner">
          <span className="north">N</span>
          <span className="east">E</span>
          <span className="south">S</span>
          <span className="west">W</span>

          <div className="compass-arrow">
            ◆
          </div>
        </div>

      </div>


      {/* =================================================
          FLOATING DESTINATION INFO
      ================================================= */}

      <div className="floating-destination floating-one">

        <span className="floating-number">
          01
        </span>

        <div>
          <strong>Hunza Valley</strong>
          <small>2,438m elevation</small>
        </div>

      </div>


      <div className="floating-destination floating-two">

        <span className="floating-number">
          02
        </span>

        <div>
          <strong>Skardu</strong>
          <small>Mountain Paradise</small>
        </div>

      </div>


      {/* =================================================
          DECORATIVE PARTICLES
      ================================================= */}

      <div className="destination-particle particle-one">✦</div>
      <div className="destination-particle particle-two">✧</div>
      <div className="destination-particle particle-three">✦</div>
      <div className="destination-particle particle-four">✧</div>
      <div className="destination-particle particle-five">·</div>
      <div className="destination-particle particle-six">·</div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="destination-content-wrapper">


        {/* =========================
            HEADING
        ========================= */}

        <div className="destination-heading">

          <div className="heading-eyebrow">
            <span></span>
            EXPLORE PAKISTAN
            <span></span>
          </div>

          <h1>
            Find Your Next
            <br />
            <em>Beautiful Escape</em>
          </h1>

          <p>
            From majestic northern mountains to peaceful valleys,
            discover Pakistan's most unforgettable destinations.
            Choose a place, start your journey and create memories
            that last forever.
          </p>

        </div>


        {/* =========================
            DESTINATION STATS
        ========================= */}

        <div className="destination-stats">

          <div className="stat-item">
            <strong>{destinations}+</strong>
            <span>Destinations</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>{rating}</strong>
            <span>Traveler Rating</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>24/7</strong>
            <span>Travel Support</span>
          </div>

        </div>


        {/* =================================================
            DESTINATION CARDS
        ================================================= */}

        <div className="destination-grid">


          {/* ================= HUNZA ================= */}

          <article className="destination-card">

            <div className="destination-image">

              <img
                src={hunza}
                alt="Hunza Valley"
              />

              <div className="image-dark"></div>

              <div className="card-number">
                01
              </div>

              <div className="card-location">
                📍 Gilgit-Baltistan
              </div>

            </div>

            <div className="destination-card-content">

              <span className="destination-type">
                MOUNTAIN ESCAPE
              </span>

              <h3>
                Hunza Valley
              </h3>

              <p>
                A breathtaking valley surrounded by majestic
                mountains, peaceful villages and unforgettable views.
              </p>

              <button onClick={() => setSelectedDestination("Hunza")}>
  Explore
  <span>↗</span>
</button>

            </div>

          </article>


          {/* ================= SKARDU ================= */}

          <article className="destination-card">

            <div className="destination-image">

              <img
                src={skardu}
                alt="Skardu"
              />

              <div className="image-dark"></div>

              <div className="card-number">
                02
              </div>

              <div className="card-location">
                📍 Gilgit-Baltistan
              </div>

            </div>

            <div className="destination-card-content">

              <span className="destination-type">
                ADVENTURE
              </span>

              <h3>
                Skardu
              </h3>

              <p>
                Explore dramatic mountain ranges, crystal-clear
                lakes and some of Pakistan's most stunning landscapes.
              </p>

<button onClick={() => setSelectedDestination("Skardu")}>
  Explore
  <span>↗</span>
</button>

            </div>

          </article>


          {/* ================= NEELUM ================= */}

          <article className="destination-card">

            <div className="destination-image">

              <img
                src={nelum}
                alt="Neelum Valley"
              />

              <div className="image-dark"></div>

              <div className="card-number">
                03
              </div>

              <div className="card-location">
                📍 Azad Kashmir
              </div>

            </div>

            <div className="destination-card-content">

              <span className="destination-type">
                NATURE RETREAT
              </span>

              <h3>
                Neelum Valley
              </h3>

              <p>
                Lose yourself in lush green valleys, flowing rivers
                and peaceful scenery surrounded by mountains.
              </p>

              <button onClick={() => setSelectedDestination("Neelum Valley")}>
  Explore
  <span>↗</span>
</button>

            </div>

          </article>


          {/* ================= SAIF UL MALOOK ================= */}

          <article className="destination-card">

            <div className="destination-image">

              <img
                src={saif}
                alt="Saif-ul-Malook Lake"
              />

              <div className="image-dark"></div>

              <div className="card-number">
                04
              </div>

              <div className="card-location">
                📍 Naran, Kaghan
              </div>

            </div>

            <div className="destination-card-content">

              <span className="destination-type">
                ALPINE BEAUTY
              </span>

              <h3>
                Saif-ul-Malook
              </h3>

              <p>
                Discover the magical alpine lake surrounded by
                spectacular peaks and breathtaking natural beauty.
              </p>

              <button onClick={() => setSelectedDestination("Saif-ul-Malook")}>
  Explore
  <span>↗</span>
</button>

            </div>

          </article>


        </div>
{/* =================================================
    DESTINATION POPUP
================================================= */}

{selectedDestination && (
  <div
    className="destination-modal-overlay"
    onClick={() => setSelectedDestination(null)}
  >
    <div
      className="destination-modal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}
      <button
        className="destination-modal-close"
        onClick={() => setSelectedDestination(null)}
      >
        ×
      </button>

      {/* IMAGE */}
      <div className="destination-modal-image">

        <img
          src={
            selectedDestination === "Hunza"
              ? hunza
              : selectedDestination === "Skardu"
              ? skardu
              : selectedDestination === "Neelum Valley"
              ? nelum
              : saif
          }
          alt={selectedDestination}
        />

      </div>

      {/* CONTENT */}
      <div className="destination-modal-content">

        <span className="destination-modal-tag">
          ✈ EXPLORE PAKISTAN
        </span>

        <h2>{selectedDestination}</h2>

        <div className="destination-modal-rating">
          ⭐ 4.9
          <span>Traveler Rating</span>
        </div>

        <p>
          {selectedDestination === "Hunza"
            ? "Discover the breathtaking beauty of Hunza Valley, surrounded by majestic mountains, peaceful villages and unforgettable landscapes."
            : selectedDestination === "Skardu"
            ? "Explore the dramatic mountains, crystal-clear lakes and unforgettable landscapes of beautiful Skardu."
            : selectedDestination === "Neelum Valley"
            ? "Experience lush green valleys, flowing rivers and peaceful mountain scenery in the beautiful Neelum Valley."
            : "Discover the magical Saif-ul-Malook Lake surrounded by spectacular peaks and breathtaking natural beauty."}
        </p>

        <div className="destination-modal-info">

          <div>
            <strong>📍 Location</strong>
            <span>
              {selectedDestination === "Hunza" ||
              selectedDestination === "Skardu"
                ? "Gilgit-Baltistan"
                : selectedDestination === "Neelum Valley"
                ? "Azad Kashmir"
                : "Naran, Kaghan"}
            </span>
          </div>

          <div>
            <strong>🌤 Best Time</strong>
            <span>April – October</span>
          </div>

        </div>

        <a href="#packages" className="destination-modal-button">
  View Packages
  <span>↗</span>
</a>

      </div>

    </div>
  </div>
)}

        {/* =================================================
            BOTTOM TRAVEL MESSAGE
        ================================================= */}

        <div className="destination-footer">

          <div className="footer-line"></div>

          <span>
            ✈ YOUR JOURNEY STARTS HERE
          </span>

          <div className="footer-line"></div>

        </div>


      </div>

    </section>
  );
}

export default Destinations;