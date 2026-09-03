import hunza from "../assets/images/hunza.jpg";
import skardu from "../assets/images/skardu.jpg";
import nelum from "../assets/images/nelum.jpg";
import saif from "../assets/images/saifulmalook.jpg";

function Gallery() {
  const galleryImages = [
    {
      image: hunza,
      title: "Hunza Valley",
      location: "Gilgit-Baltistan",
      category: "MOUNTAINS",
      text: "Majestic peaks, peaceful valleys and unforgettable mountain views.",
    },
    {
      image: skardu,
      title: "Skardu",
      location: "Gilgit-Baltistan",
      category: "ADVENTURE",
      text: "A breathtaking land of mountains, lakes and unforgettable adventures.",
    },
    {
      image: nelum,
      title: "Neelum Valley",
      location: "Azad Kashmir",
      category: "NATURE",
      text: "A peaceful paradise surrounded by forests, rivers and mountains.",
    },
    {
      image: saif,
      title: "Saif-ul-Malook",
      location: "Naran",
      category: "LAKES",
      text: "An enchanting alpine lake surrounded by spectacular scenery.",
    },
  ];

  return (
    <section className="luxury-gallery" id="gallery">

      {/* Decorative Elements */}
      <div className="gallery-orb orb-one"></div>
      <div className="gallery-orb orb-two"></div>
      <div className="gallery-line"></div>

      {/* Heading */}
      <div className="gallery-header">

        <div className="gallery-kicker">
          <span></span>
          EXPLOREPK TRAVEL COLLECTION
          <span></span>
        </div>

        <h2>
          Moments That
          <em>Stay With You</em>
        </h2>

        <p>
          A glimpse into the breathtaking destinations and unforgettable
          experiences waiting for you across Pakistan.
        </p>

      </div>


      {/* Featured Section */}
      <div className="gallery-featured">

        <div className="featured-image">
          <img src={hunza} alt="Hunza Valley" />

          <div className="featured-gradient"></div>

          <div className="featured-label">
            <span>✦</span>
            FEATURED DESTINATION
          </div>

          <div className="featured-number">
            01
          </div>

          <div className="featured-info">

            <div className="featured-location">
              GILGIT-BALTISTAN
            </div>

            <h3>
              The Magic of
              <strong>Hunza Valley</strong>
            </h3>

            <p>
              Discover dramatic mountain peaks, peaceful villages and
              timeless traditions in one of Pakistan's most beautiful
              destinations.
            </p>

            <a href="#packages">
              Explore Journey
              <span>→</span>
            </a>

          </div>
        </div>

        <div className="featured-side">

          <div className="mini-stat">
            <strong>20+</strong>
            <span>Dream Destinations</span>
          </div>

          <div className="mini-stat">
            <strong>500+</strong>
            <span>Happy Travelers</span>
          </div>

          <div className="mini-stat">
            <strong>24/7</strong>
            <span>Travel Assistance</span>
          </div>

          <div className="side-quote">
            <div>“</div>
            <p>
              Travel is the only thing you buy that makes you richer.
            </p>
            <span>— ExplorePK Travels</span>
          </div>

        </div>

      </div>


      {/* Collection Header */}
      <div className="collection-header">

        <div>
          <span>DESTINATION STORIES</span>

          <h3>
            Pakistan in
            <em>Every Frame</em>
          </h3>
        </div>

        <p>
          From snow-covered mountains to crystal-clear lakes,
          discover the places that make every journey unforgettable.
        </p>

      </div>


      {/* Cards */}
      <div className="gallery-cards">

        {galleryImages.map((item, index) => (

          <article className="luxury-gallery-card" key={item.title}>

            <div className="card-image">

              <img src={item.image} alt={item.title} />

              <div className="card-shade"></div>

              <span className="card-number">
                0{index + 2}
              </span>

              <span className="card-category">
                {item.category}
              </span>

              <div className="card-arrow">
                ↗
              </div>

            </div>

            <div className="card-body">

              <span className="card-location">
                ◇ {item.location}
              </span>

              <h4>{item.title}</h4>

              <p>{item.text}</p>

              <div className="card-footer">
                <span>Explore Destination</span>
                <span>→</span>
              </div>

            </div>

          </article>

        ))}

      </div>


      {/* Experience Strip */}
      <div className="gallery-experience">

        <div className="experience-icon">
          ✦
        </div>

        <div>
          <span>YOUR JOURNEY. YOUR STORY.</span>

          <h3>
            Go somewhere
            <em>beautiful.</em>
          </h3>
        </div>

        <p>
          Let ExplorePK turn your travel dreams into carefully
          planned experiences filled with comfort, adventure and memories.
        </p>

        <a href="#contact">
          Plan My Trip
          <span>→</span>
        </a>

      </div>


      {/* Bottom Stats */}
      <div className="gallery-bottom">

        <div>
          <strong>20+</strong>
          <span>Destinations</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Travel Experiences</span>
        </div>

        <div>
          <strong>500+</strong>
          <span>Happy Travelers</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Memorable Journeys</span>
        </div>

      </div>

    </section>
  );
}

export default Gallery;