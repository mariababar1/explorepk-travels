import hunza from "../assets/images/hunza.jpg";
import skardu from "../assets/images/skardu.jpg";
import neelum from "../assets/images/neelum-valley.jpg";
import saifulmalook from "../assets/images/saifulmalook.jpg";
import { useEffect, useState } from "react";

function PremiumFeatures() {
  const [destination, setDestination] = useState("Hunza Valley");
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(4);

  const prices = {
    "Hunza Valley": 18000,
    Skardu: 22000,
    "Neelum Valley": 15000,
    "Saif-ul-Malook": 12000,
  };

  const total = prices[destination] * travelers * days;

  useEffect(() => {
    const elements = document.querySelectorAll(".premium-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("premium-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="premium-features">

      {/* ================= TESTIMONIALS ================= */}
      <section className="premium-section premium-reveal">
        <div className="premium-heading">
          <span>TRAVELER STORIES</span>
          <h2>What Travelers Love</h2>
          <p>
            Beautiful journeys, unforgettable places and experiences
            worth remembering.
          </p>
        </div>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "The Hunza experience was incredible. Everything felt smooth,
              comfortable and beautifully planned."
            </p>
            <h4>Sarah Khan</h4>
            <span>Islamabad</span>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Skardu was breathtaking. ExplorePK made planning the journey
              simple and stress-free."
            </p>
            <h4>Ahmed Raza</h4>
            <span>Lahore</span>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Beautiful destinations, premium service and a memorable
              travel experience."
            </p>
            <h4>Ayesha Malik</h4>
            <span>Karachi</span>
          </div>
        </div>
      </section>

      {/* ================= PRICE CALCULATOR ================= */}
      <section className="calculator-section premium-reveal">
        <div className="premium-heading">
          <span>PLAN YOUR JOURNEY</span>
          <h2>Estimate Your Trip</h2>
          <p>
            Select your destination and get an instant estimated travel cost.
          </p>
        </div>

        <div className="calculator-card">

          <div className="calculator-field">
            <label>DESTINATION</label>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option>Hunza Valley</option>
              <option>Skardu</option>
              <option>Neelum Valley</option>
              <option>Saif-ul-Malook</option>
            </select>
          </div>

          <div className="calculator-field">
            <label>TRAVELERS</label>

            <select
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
            </select>
          </div>

          <div className="calculator-field">
            <label>DAYS</label>

            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            >
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
            </select>
          </div>

          <div className="calculator-result">
            <span>ESTIMATED COST</span>
            <strong>PKR {total.toLocaleString()}</strong>
            <small>
              Final price may vary depending on package selection.
            </small>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section premium-reveal">

        <div className="stat-item">
          <strong>500+</strong>
          <span>Travel Experiences</span>
        </div>

        <div className="stat-item">
          <strong>20+</strong>
          <span>Beautiful Destinations</span>
        </div>

        <div className="stat-item">
          <strong>4.9</strong>
          <span>Travel Rating</span>
        </div>

        <div className="stat-item">
          <strong>24/7</strong>
          <span>Travel Support</span>
        </div>

      </section>

      {/* ================= MINI GALLERY ================= */}
      <section className="mini-gallery-section premium-reveal">

        <div className="premium-heading">
          <span>VISUAL JOURNEY</span>
          <h2>Moments Worth Exploring</h2>
          <p>
            Discover some of Pakistan's most beautiful destinations.
          </p>
        </div>

        <div className="mini-gallery">

          {/* HUNZA */}
          <div className="mini-gallery-item">
            <img
              src={hunza}
              alt="Hunza Valley"
            />
            <div>Hunza Valley</div>
          </div>

          {/* SKARDU */}
          <div className="mini-gallery-item">
            <img
              src={skardu}
              alt="Skardu"
            />
            <div>Skardu</div>
          </div>

          {/* NEELUM */}
          <div className="mini-gallery-item">
            <img
              src={neelum}
              alt="Neelum Valley"
            />
            <div>Neelum Valley</div>
          </div>

          {/* SAIF-UL-MALOOK */}
          <div className="mini-gallery-item">
            <img
              src={saifulmalook}
              alt="Saif-ul-Malook"
            />
            <div>Saif-ul-Malook</div>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="premium-cta premium-reveal">

        <span>YOUR NEXT ADVENTURE</span>

        <h2>Pakistan Is Waiting For You</h2>

        <p>
          Discover breathtaking landscapes, luxury experiences and
          unforgettable journeys with ExplorePK Travels.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("booking")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Plan My Journey
        </button>

      </section>

    </div>
  );
}

export default PremiumFeatures;