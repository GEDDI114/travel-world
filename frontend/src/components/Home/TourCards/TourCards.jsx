import React from "react";
import PagkageStyle from "./TourCards.module.css";

import AustraliaLogo from "../../../Assets/Australia.png";
import BrazilLogo from "../../../Assets/Ellipse 623.png";
import EgyptLogo from "../../../Assets/EgyptLogo.png";

import AustraliImage from "../../../Assets/AustraliaImage.png";
import BrazilianImage from "../../../Assets/Brazil.png";
import EgyptImage from "../../../Assets/EgyptImage.png";

import TourCard from "./TourPagkage/TourCard";

const TourCards = () => {
  const Pagkages = [
    {
      country: "Australia",
      image: AustraliImage,
      logo: AustraliaLogo,
    },
    {
      country: "Egypt",
      image: EgyptImage,
      logo: EgyptLogo,
    },
    {
      country: "Brazil",
      image: BrazilianImage,
      logo: BrazilLogo,
    },
  ];
  return (
    <>
      <div className={PagkageStyle.container}>
        {Pagkages.map((card) => {
          return <TourCard background={card.image} logo={card.logo} />;
        })}
      </div>
    </>
  );
};

export default TourCards;
