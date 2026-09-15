import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

import hunza from "../assets/images/hunza.jpg";
import skardu from "../assets/images/skardu.jpg";
import nelum from "../assets/images/neelum-valley.jpg";
import saif from "../assets/images/saifulmalook.jpg";
import map from "../assets/images/map.jpg";

// =================================================
// LEAFLET MARKER FIX
// =================================================

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// =================================================
// DESTINATION DATA
// =================================================

const destinationData = [
  {
    name: "Hunza Valley",
    image: hunza,
    type: "MOUNTAIN ESCAPE",
    location: "Gilgit-Baltistan",

    description:
      "A breathtaking valley surrounded by majestic mountains, peaceful villages and unforgettable views.",

    modalDescription:
      "Discover the breathtaking beauty of Hunza Valley, surrounded by majestic mountains, peaceful villages and unforgettable landscapes.",

    coordinates: [36.3167, 74.65],

    bestTime: "April – October",
  },

  {
    name: "Skardu",
    image: skardu,
    type: "ADVENTURE",
    location: "Gilgit-Baltistan",

    description:
      "Explore dramatic mountain ranges, crystal-clear lakes and some of Pakistan's most stunning landscapes.",

    modalDescription:
      "Explore the dramatic mountains, crystal-clear lakes and unforgettable landscapes of beautiful Skardu.",

    coordinates: [35.3, 75.63],

    bestTime: "May – October",
  },

  {
    name: "Neelum Valley",
    image: nelum,
    type: "NATURE RETREAT",
    location: "Azad Kashmir",

    description:
      "Lose yourself in lush green valleys, flowing rivers and peaceful scenery surrounded by mountains.",

    modalDescription:
      "Experience lush green valleys, flowing rivers and peaceful mountain scenery in the beautiful Neelum Valley.",

    coordinates: [34.5858, 73.907],

    bestTime: "April – October",
  },

  {
    name: "Saif-ul-Malook",
    image: saif,
    type: "ALPINE BEAUTY",
    location: "Naran, Kaghan",

    description:
      "Discover the magical alpine lake surrounded by spectacular peaks and breathtaking natural beauty.",

    modalDescription:
      "Discover the magical Saif-ul-Malook Lake surrounded by spectacular peaks and breathtaking natural beauty.",

    coordinates: [34.876, 73.651],

    bestTime: "May – September",
  },
];

// =================================================
// DESTINATIONS COMPONENT
// =================================================

function Destinations() {

  const [destinations, setDestinations] = useState(0);

  const [rating, setRating] = useState(0);

  const [selectedDestination, setSelectedDestination] =
    useState(null);


  // =================================================
  // DESTINATION COUNTER
  // =================================================

  useEffect(() => {

    let destinationCount = 0;

    const destinationTimer = setInterval(() => {

      destinationCount += 1;

      if (destinationCount >= 4) {

        destinationCount = 4;

        clearInterval(destinationTimer);
      }

      setDestinations(destinationCount);

    }, 120);


    return () => {
      clearInterval(destinationTimer);
    };

  }, []);


  // =================================================
  // RATING COUNTER
  // =================================================

  useEffect(() => {

    let ratingCount = 0;

    const ratingTimer = setInterval(() => {

      ratingCount += 0.1;

      if (ratingCount >= 4.9) {

        ratingCount = 4.9;

        clearInterval(ratingTimer);
      }

      setRating(
        Number(ratingCount.toFixed(1))
      );

    }, 80);


    return () => {
      clearInterval(ratingTimer);
    };

  }, []);


  // =================================================
  // OPEN DESTINATION
  // =================================================

  const openDestination = (destination) => {

    setSelectedDestination(destination);

  };


  // =================================================
  // CLOSE DESTINATION
  // =================================================

  const closeDestination = () => {

    setSelectedDestination(null);

  };


  return (

    <section
      className="destinations"
      id="destinations"
    >

      {/* =================================================
          LARGE MAP - LEFT
      ================================================= */}

      <div className="destination-map map-left">

        <img
          src={map}
          alt=""
        />

        <div className="map-overlay"></div>


        <div className="map-route route-left">

          <span className="route-dot"></span>

          <span className="route-dot"></span>

          <span className="route-dot"></span>

        </div>


        <div className="map-pin pin-hunza">

          <span></span>

          <small>
            HUNZA
          </small>

        </div>


        <div className="map-pin pin-skardu">

          <span></span>

          <small>
            SKARDU
          </small>

        </div>

      </div>


      {/* =================================================
          LARGE MAP - RIGHT
      ================================================= */}

      <div className="destination-map map-right">

        <img
          src={map}
          alt=""
        />

        <div className="map-overlay"></div>


        <div className="map-route route-right">

          <span className="route-dot"></span>

          <span className="route-dot"></span>

          <span className="route-dot"></span>

        </div>


        <div className="map-pin pin-neelum">

          <span></span>

          <small>
            NEELUM
          </small>

        </div>


        <div className="map-pin pin-naran">

          <span></span>

          <small>
            NARAN
          </small>

        </div>

      </div>


      {/* =================================================
          AIRPLANES
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
          COMPASS
      ================================================= */}

      <div className="destination-compass">

        <div className="compass-inner">

          <span className="north">
            N
          </span>

          <span className="east">
            E
          </span>

          <span className="south">
            S
          </span>

          <span className="west">
            W
          </span>


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

          <strong>
            Hunza Valley
          </strong>

          <small>
            2,438m elevation
          </small>

        </div>

      </div>


      <div className="floating-destination floating-two">

        <span className="floating-number">
          02
        </span>


        <div>

          <strong>
            Skardu
          </strong>

          <small>
            Mountain Paradise
          </small>

        </div>

      </div>


      {/* =================================================
          PARTICLES
      ================================================= */}

      <div className="destination-particle particle-one">
        ✦
      </div>

      <div className="destination-particle particle-two">
        ✧
      </div>

      <div className="destination-particle particle-three">
        ✦
      </div>

      <div className="destination-particle particle-four">
        ✧
      </div>

      <div className="destination-particle particle-five">
        ·
      </div>

      <div className="destination-particle particle-six">
        ·
      </div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="destination-content-wrapper">


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="destination-heading">

          <div className="heading-eyebrow">

            <span></span>

            EXPLORE PAKISTAN

            <span></span>

          </div>


          <h1>

            Find Your Next

            <br />

            <em>
              Beautiful Escape
            </em>

          </h1>


          <p>

            From majestic northern mountains to peaceful valleys,
            discover Pakistan's most unforgettable destinations.
            Choose a place, start your journey and create memories
            that last forever.

          </p>

        </div>


        {/* =================================================
            STATS
        ================================================= */}

        <div className="destination-stats">


          <div className="stat-item">

            <strong>
              {destinations}+
            </strong>

            <span>
              Destinations
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">

            <strong>
              {rating}
            </strong>

            <span>
              Traveler Rating
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">

            <strong>
              24/7
            </strong>

            <span>
              Travel Support
            </span>

          </div>

        </div>


        {/* =================================================
            REAL INTERACTIVE MAP
        ================================================= */}

        <div className="explore-map-section">


          <div className="explore-map-heading">

            <span>
              ✦ EXPLORE OUR DESTINATIONS
            </span>


            <h2>

              Discover Pakistan

              <em>
                {" "}on the map.
              </em>

            </h2>


            <p>

              Explore our featured destinations and discover
              your next unforgettable journey.

            </p>

          </div>


          <div className="explore-map">

<MapContainer
  center={[35.1, 74.2]}
  zoom={6}
  scrollWheelZoom={true}
  className="real-map"
>
  <TileLayer
    attribution="Tiles &copy; Esri"
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  />

  {destinationData.map((destination) => (
    <Marker
      key={destination.name}
      position={destination.coordinates}
    >
      <Popup>
        <div className="map-popup">
          <strong>{destination.name}</strong>

          <span>
            📍 {destination.location}
          </span>

          <small>
            ★ 4.9 Traveler Rating
          </small>

          <button
            onClick={() => openDestination(destination)}
          >
            Explore
          </button>
        </div>
      </Popup>
    </Marker>
  ))}
</MapContainer>


          </div>

        </div>


        {/* =================================================
            DESTINATION CARDS
        ================================================= */}

        <div className="destination-grid">


          {destinationData.map(
            (destination, index) => (

              <article

                className="destination-card"

                key={destination.name}

              >


                <div className="destination-image">


                  <img

                    src={destination.image}

                    alt={destination.name}

                  />


                  <div className="image-dark"></div>


                  <div className="card-number">

                    0{index + 1}

                  </div>


                  <div className="card-location">

                    📍 {destination.location}

                  </div>


                </div>


                <div className="destination-card-content">


                  <span className="destination-type">

                    {destination.type}

                  </span>


                  <h3>

                    {destination.name}

                  </h3>


                  <p>

                    {destination.description}

                  </p>


                  <button

                    onClick={() =>
                      openDestination(
                        destination
                      )
                    }

                  >

                    Explore

                    <span>
                      ↗
                    </span>

                  </button>


                </div>


              </article>

            )
          )}


        </div>


        {/* =================================================
            DESTINATION POPUP
        ================================================= */}

        {selectedDestination && (

          <div

            className="destination-modal-overlay"

            onClick={closeDestination}

          >


            <div

              className="destination-modal"

              onClick={(e) =>
                e.stopPropagation()
              }

            >


              {/* CLOSE */}

              <button

                className="destination-modal-close"

                onClick={closeDestination}

              >

                ×

              </button>


              {/* IMAGE */}

              <div className="destination-modal-image">


                <img

                  src={
                    selectedDestination.image
                  }

                  alt={
                    selectedDestination.name
                  }

                />


              </div>


              {/* CONTENT */}

              <div className="destination-modal-content">


                <span className="destination-modal-tag">

                  ✈ EXPLORE PAKISTAN

                </span>


                <h2>

                  {selectedDestination.name}

                </h2>


                <div className="destination-modal-rating">

                  ⭐ 4.9

                  <span>
                    Traveler Rating
                  </span>

                </div>


                <p>

                  {
                    selectedDestination.modalDescription
                  }

                </p>


                <div className="destination-modal-info">


                  <div>

                    <strong>
                      📍 Location
                    </strong>

                    <span>
                      {selectedDestination.location}
                    </span>

                  </div>


                  <div>

                    <strong>
                      🌤 Best Time
                    </strong>

                    <span>
                      {selectedDestination.bestTime}
                    </span>

                  </div>


                </div>


                <a

                  href="#packages"

                  className="destination-modal-button"

                  onClick={closeDestination}

                >

                  View Packages

                  <span>
                    ↗
                  </span>

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