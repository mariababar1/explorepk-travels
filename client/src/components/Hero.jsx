import { useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  return (
    <section className="hero" id="home">

      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src="/videos/travel.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>Discover the Beauty of Pakistan</h1>

        <p>
          Explore breathtaking destinations, luxury tours and unforgettable
          travel experiences.
        </p>

        <div className="hero-buttons">

          <a href="#destinations" className="hero-btn">
            Explore Now
          </a>

          <a href="#packages" className="hero-btn">
            View Packages
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;