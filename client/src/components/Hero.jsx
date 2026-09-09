import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 10) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="hero" id="home">

      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="metadata"
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