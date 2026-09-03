import { useState } from "react";

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.target;

    const bookingData = {
        fullName: form.name.value,
  phone: form.phone.value,
  email: form.email.value,
  destination: form.destination.value,
  travelers: form.travelers.value,
  travelDate: form.travelDate.value,
  package: form.package.value,
  specialRequests: form.specialRequests.value,
};

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      console.log("Booking saved:", data);

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Booking Error:", err);
      setError(
        "Booking submit nahi hui. Please check that your server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="luxury-booking" id="booking">

      <div className="booking-orbit booking-orbit-one"></div>
      <div className="booking-orbit booking-orbit-two"></div>

      <div className="booking-spark spark-one">✦</div>
      <div className="booking-spark spark-two">✧</div>
      <div className="booking-spark spark-three">◇</div>

      <div className="booking-container">

        {/* HEADING */}
        <div className="booking-heading">
          <span className="booking-kicker">
            <i></i>
            PLAN YOUR ESCAPE
            <i></i>
          </span>

          <h2>
            Your Journey
            <em> Begins Here.</em>
          </h2>

          <p>
            Tell us where you want to go. We'll take care of the
            details and create an unforgettable Pakistani adventure
            designed around you.
          </p>
        </div>

        {/* MAIN */}
        <div className="booking-layout">

          {/* LEFT */}
          <div className="booking-info">

            <div className="booking-info-top">
              <span>EXPLOREPK TRAVELS</span>

              <h3>
                Travel more.
                <br />
                <em>Worry less.</em>
              </h3>

              <p>
                From majestic mountains to peaceful valleys, our travel
                specialists help you discover Pakistan in comfort and style.
              </p>
            </div>

            <div className="booking-benefits">

              <div className="booking-benefit">
                <div className="benefit-icon">✦</div>
                <div>
                  <h4>Personalized Trips</h4>
                  <p>Journeys designed around your preferences.</p>
                </div>
              </div>

              <div className="booking-benefit">
                <div className="benefit-icon">◇</div>
                <div>
                  <h4>Premium Comfort</h4>
                  <p>Comfortable travel with carefully selected stays.</p>
                </div>
              </div>

              <div className="booking-benefit">
                <div className="benefit-icon">∞</div>
                <div>
                  <h4>24/7 Assistance</h4>
                  <p>We're here whenever you need us during your trip.</p>
                </div>
              </div>

            </div>

            <div className="booking-trust">
              <div>
                <strong>500+</strong>
                <span>TRAVELERS</span>
              </div>

              <div>
                <strong>20+</strong>
                <span>DESTINATIONS</span>
              </div>

              <div>
                <strong>4.9</strong>
                <span>TRAVEL RATING</span>
              </div>
            </div>

          </div>

          {/* FORM */}
          <div className="booking-form-card">

            <div className="form-card-heading">
              <div>
                <span>✦ BOOK YOUR EXPERIENCE</span>
                <h3>Let's plan your trip</h3>
              </div>

              <div className="form-number">01</div>
            </div>

            {submitted ? (

              <div className="booking-success">

                <div className="success-icon">✓</div>

                <span>REQUEST RECEIVED</span>

                <h3>
                  Your journey is
                  <em> taking shape.</em>
                </h3>

                <p>
                  Thank you for choosing ExplorePK. Our travel consultant
                  will contact you shortly to discuss your trip.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                >
                  Make Another Booking
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                {/* NAME + PHONE */}
                <div className="form-row">

                  <div className="form-group">
                    <label>FULL NAME</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>PHONE NUMBER</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 3XX XXXXXXX"
                      required
                    />
                  </div>

                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* DESTINATION + TRAVELERS */}
                <div className="form-row">

                  <div className="form-group">
                    <label>DESTINATION</label>

                    <select
                      name="destination"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select destination
                      </option>

                      <option>Hunza Valley</option>
                      <option>Skardu</option>
                      <option>Swat Valley</option>
                      <option>Naran & Kaghan</option>
                      <option>Neelum Valley</option>
                      <option>Fairy Meadows</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>TRAVELERS</label>

                    <select
                      name="travelers"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Number of travelers
                      </option>

                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3 Travelers</option>
                      <option>4 Travelers</option>
                      <option>5+ Travelers</option>
                    </select>
                  </div>

                </div>

                {/* DATE + PACKAGE */}
                <div className="form-row">

                  <div className="form-group">
                    <label>TRAVEL DATE</label>

                    <input
                      type="date"
                      name="travelDate"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>PACKAGE</label>

                    <select
                      name="package"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select package
                      </option>

                      <option>Luxury Escape</option>
                      <option>Mountain Adventure</option>
                      <option>Family Getaway</option>
                      <option>Romantic Escape</option>
                      <option>Custom Trip</option>
                    </select>
                  </div>

                </div>

                {/* REQUESTS */}
                <div className="form-group">
                  <label>SPECIAL REQUESTS</label>

                  <textarea
                    name="specialRequests"
                    rows="4"
                    placeholder="Tell us anything you'd like us to know..."
                  ></textarea>
                </div>

                {/* ERROR */}
                {error && (
                  <p
                    style={{
                      color: "red",
                      marginBottom: "15px",
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* SUBMIT */}
                <div className="form-bottom">

                  <p>
                    <span>🔒</span>
                    Your information is kept private and secure.
                  </p>

                  <button
                    type="submit"
                    className="booking-submit"
                    disabled={loading}
                  >
                    <span>
                      {loading
                        ? "SUBMITTING..."
                        : "REQUEST MY TRIP"}
                    </span>

                    <b>↗</b>
                  </button>

                </div>

              </form>
            )}

          </div>
        </div>

        {/* BOTTOM */}
        <div className="booking-bottom">
          <span>✦</span>

          <p>
            Every great journey starts with a single decision.
            <em> Let yours start with ExplorePK.</em>
          </p>

          <span>✦</span>
        </div>

      </div>
    </section>
  );
}

export default Booking;