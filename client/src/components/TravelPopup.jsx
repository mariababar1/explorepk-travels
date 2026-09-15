import { useEffect, useState } from "react";

const popupData = [
  {
    icon: "✦",
    label: "LIMITED OFFER",
    title: "Flat 15% OFF",
    text: "Book your next Pakistan adventure today.",
    badge: "USE CODE: EXPLORE15",
  },
  {
    icon: "✈",
    label: "EXPLOREPK SERVICES",
    title: "Luxury Travel Planning",
    text: "Hotels, transport & customized tour packages.",
    badge: "ALL IN ONE",
  },
  {
    icon: "🏔️",
    label: "TRAVEL UPDATE",
    title: "Hunza Valley",
    text: "A perfect destination for your next mountain escape.",
    badge: "APRIL – OCTOBER",
  },
  {
    icon: "★",
    label: "PREMIUM SERVICE",
    title: "24/7 Travel Support",
    text: "Our travel team is here whenever you need us.",
    badge: "ALWAYS WITH YOU",
  },
  {
    icon: "◆",
    label: "SPECIAL OFFER",
    title: "Luxury Packages",
    text: "Create unforgettable memories in the mountains.",
    badge: "LIMITED SLOTS",
  },
  {
    icon: "📍",
    label: "DID YOU KNOW?",
    title: "Explore Pakistan",
    text: "Discover Hunza, Skardu, Neelum Valley & more.",
    badge: "4 DESTINATIONS",
  },
];

function TravelPopup() {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    let hideTimer;

    const showPopup = () => {
      const random =
        popupData[Math.floor(Math.random() * popupData.length)];

      const positions = [
        "popup-top",
        "popup-left",
        "popup-right",
        "popup-bottom-right",
      ];

      const position =
        positions[Math.floor(Math.random() * positions.length)];

      setPopup({
        ...random,
        position,
      });

      hideTimer = setTimeout(() => {
        setPopup(null);
      }, 5500);
    };

    const firstTimer = setTimeout(showPopup, 2500);

    const interval = setInterval(showPopup, 11000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  if (!popup) {
    return null;
  }

  return (
    <div className={`travel-popup ${popup.position}`}>
      <div className="travel-popup-icon">
        {popup.icon}
      </div>

      <div className="travel-popup-content">
        <span>{popup.label}</span>

        <h4>{popup.title}</h4>

        <p>{popup.text}</p>

        <small>{popup.badge}</small>
      </div>

      <button
        className="travel-popup-close"
        onClick={() => setPopup(null)}
      >
        ×
      </button>

      <div className="travel-popup-progress"></div>
    </div>
  );
}

export default TravelPopup;