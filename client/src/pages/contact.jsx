function Contact() {
  return (
    <section className="contact-page" id="contact">

      {/* Decorative Elements */}
      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      <div className="travel-plane plane-one">✈</div>
      <div className="travel-plane plane-two">✈</div>

      {/* Hero */}
      <div className="contact-hero">

        <span className="contact-label">
          EXPLORE • DISCOVER • TRAVEL
        </span>

        <h1>
          Let's Plan Your
          <span> Dream Journey</span>
        </h1>

        <p>
          Tell us where you want to go and we'll help you create
          an unforgettable Pakistan travel experience.
        </p>

      </div>

      {/* Main Content */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="info-heading">
            <span>WHY TRAVEL WITH US</span>

            <h2>
              Travel Beyond
              <br />
              Expectations.
            </h2>
          </div>

          <p className="info-description">
            From the majestic mountains of Hunza to the peaceful
            lakes of Naran, ExplorePK Travels brings Pakistan's
            most beautiful destinations closer to you.
          </p>

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <div className="detail-card">
              <div className="detail-icon">📍</div>

              <div>
                <h3>Our Location</h3>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📞</div>

              <div>
                <h3>Call Us</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">✉</div>

              <div>
                <h3>Email Us</h3>
                <p>info@explorepk.com</p>
              </div>
            </div>

          </div>

          {/* Travel Promise */}
          <div className="travel-promise">

            <div className="promise-icon">
              ✦
            </div>

            <div>
              <strong>
                Your Journey, Our Responsibility
              </strong>

              <p>
                Safe travel • Beautiful experiences •
                Professional guidance
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - CONTACT MESSAGE */}
        <div className="booking-card">

          <div className="booking-card-top">

            <span>EXPLOREPK TRAVELS</span>

            <h2>
              Let's Create
              <br />
              Your Journey
            </h2>

            <p>
              Have questions about a destination, package or
              customized trip? Our travel experts are ready to
              help you plan your perfect experience.
            </p>

          </div>

          <div className="contact-action-content">

            <div className="contact-action-item">
              <span>✦</span>

              <div>
                <strong>Personalized Assistance</strong>
                <p>
                  Get recommendations based on your travel
                  preferences and budget.
                </p>
              </div>
            </div>

            <div className="contact-action-item">
              <span>◇</span>

              <div>
                <strong>Quick Response</strong>
                <p>
                  Our travel team will get back to you as soon
                  as possible.
                </p>
              </div>
            </div>

            <a href="#booking" className="contact-book-button">
              <span>PLAN MY TRIP</span>
              <b>↗</b>
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Feature Strip */}
      <div className="contact-features">

        <div className="feature">
          <span>✦</span>

          <div>
            <strong>Custom Trips</strong>
            <p>Designed around you</p>
          </div>
        </div>

        <div className="feature">
          <span>◆</span>

          <div>
            <strong>Expert Guides</strong>
            <p>Travel with confidence</p>
          </div>
        </div>

        <div className="feature">
          <span>♢</span>

          <div>
            <strong>Best Experiences</strong>
            <p>Memories that last</p>
          </div>
        </div>

        <div className="feature">
          <span>✧</span>

          <div>
            <strong>24/7 Support</strong>
            <p>We're here for you</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;