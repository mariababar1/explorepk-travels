import { useEffect } from "react";
import logo from "../assets/images/logo.png?url";

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="luxury-loader">
      <div className="loader-content">

        <img
          src={logo}
          alt="ExplorePK"
          className="loader-logo"
        />

        <h1>ExplorePK</h1>

        <p>Luxury Travels</p>

        <div className="loader-line">
          <span></span>
        </div>

        <div className="loader-text">
          Preparing your journey...
        </div>

      </div>
    </div>
  );
}

export default LoadingScreen;