function About() {
  return (
    <section className="luxury-about" id="about">

      {/* Decorative elements */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* Heading */}
        <div className="about-heading">
          <span className="about-kicker">
            <i></i> ABOUT EXPLOREPK <i></i>
          </span>

          <h2>
            We Don't Just Plan
            <span> Journeys.</span>
          </h2>

          <p>
            We create unforgettable experiences across the breathtaking
            landscapes of Pakistan.
          </p>
        </div>


        {/* Main Story */}
        <div className="about-story">

          <div className="about-story-number">
            01
          </div>

          <div className="about-story-content">

            <span className="about-small-title">
              OUR STORY
            </span>

            <h3>
              Discover Pakistan
              <em> Differently.</em>
            </h3>

            <p>
              ExplorePK Travels was created for travelers who want more than
              an ordinary holiday. We combine breathtaking destinations,
              carefully planned itineraries and comfortable travel experiences
              to create journeys worth remembering.
            </p>

            <p>
              From the majestic peaks of Hunza and Skardu to peaceful valleys,
              crystal-clear lakes and hidden gems, we help you experience the
              real beauty of Pakistan with comfort, confidence and style.
            </p>

            <a href="#packages" className="about-btn">
              Explore Our Journeys
              <span>↗</span>
            </a>

          </div>

          <div className="about-story-card">

            <div className="story-card-icon">
              ✦
            </div>

            <span>THE EXPLOREPK PROMISE</span>

            <h4>
              Travel beautifully.
              <br />
              Remember forever.
            </h4>

            <div className="story-line"></div>

            <p>
              Premium planning. Authentic experiences. Memorable journeys.
            </p>

          </div>

        </div>


        {/* Values */}
        <div className="about-values">

          <div className="value-heading">
            <span>WHY TRAVEL WITH US</span>

            <h3>
              Crafted for
              <em> curious explorers.</em>
            </h3>
          </div>


          <div className="value-grid">

            <div className="value-card">
              <div className="value-icon">✦</div>

              <span>01</span>

              <h4>Curated Experiences</h4>

              <p>
                Every itinerary is carefully designed to give you the perfect
                balance of adventure, comfort and discovery.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">◇</div>

              <span>02</span>

              <h4>Travel With Comfort</h4>

              <p>
                From transportation to accommodation, we focus on making
                every part of your journey smooth and stress-free.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">✧</div>

              <span>03</span>

              <h4>Local Discovery</h4>

              <p>
                Discover authentic places, hidden landscapes and unforgettable
                moments beyond the usual tourist routes.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">∞</div>

              <span>04</span>

              <h4>Memories That Last</h4>

              <p>
                We don't measure a trip by miles travelled. We measure it by
                the memories you bring home.
              </p>
            </div>

          </div>

        </div>


        {/* Statistics */}
        <div className="about-stats">

          <div>
            <strong>20+</strong>
            <span>DESTINATIONS</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>TRAVEL EXPERIENCES</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>HAPPY TRAVELERS</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>TRAVEL SUPPORT</span>
          </div>

        </div>


        {/* Final CTA */}
        <div className="about-final">

          <div>
            <span>YOUR NEXT ADVENTURE AWAITS</span>

            <h3>
              Ready to explore
              <em> Pakistan?</em>
            </h3>
          </div>

          <a href="#packages">
            Plan My Trip
            <b>→</b>
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;