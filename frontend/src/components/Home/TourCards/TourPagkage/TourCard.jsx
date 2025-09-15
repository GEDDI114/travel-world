import TourCardsStyle from "./TourCard.module.css";

const TourCard = (props) => {
  
  // const

  return (
    <>
      {/* <div className={TourCardsStyle.CardsContainer}> */}
      <div className={TourCardsStyle.Card}>
        <div
          className={TourCardsStyle.CardImage}
          style={{ backgroundImage: `url(${props.background})` }}
        >
          <div className={TourCardsStyle.Country} style={{backgroundImage: `url(${props.logo})`}}></div>
        </div>
        <div className={TourCardsStyle.PeoplesAndDays}>
          <div className={TourCardsStyle.DaysAndPeople}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/747/747310.png"
              alt=""
              width={"23px"}
              height={"25px"}
            />
            <p>8 days</p>
          </div>
          <div className={TourCardsStyle.DaysAndPeople}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              alt=""
              width={"23px"}
              height={"25px"}
            />
            <p>25 Peoples Going</p>
          </div>
        </div>
        <div className={TourCardsStyle.CountryAndReviews}>
          <h1>Australia</h1>
          <div className={TourCardsStyle.Review}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div className={TourCardsStyle.CountryLocation}>
          <i class="fa-solid fa-location-dot"></i>
          <p>Europe</p>
        </div>
        <div className={TourCardsStyle.Price}>
          <p>1,000$</p>
          <span>1,200$</span>
        </div>
        <div className={TourCardsStyle.AbouCountry}>
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </div>
        <button>Book now</button>
      </div>
      {/* </div> */}
    </>
  );
};

export default TourCard;
