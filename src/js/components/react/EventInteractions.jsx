import { useState } from "react";

const GoingMessage = ({ handleGoingClick }) => (
  <>
    <span className="check">✔</span>
    <div>
      <p>Youre going to this event!</p>
      <button className="button-link" onClick={handleGoingClick}>
        Changed your mind?
      </button>
    </div>
  </>
);

const InterestedMessage = ({ handleGoingClick, handleInterestedClick }) => {
  const handleClick = () => {
    handleInterestedClick();
    handleGoingClick();
  };

  return (
    <>
      <div>
        <p>Youre interested in going.</p>
        <button className="button-link" onClick={handleInterestedClick}>
          Changed your mind?
        </button>
      </div>
      <button className="going" onClick={handleClick}>
        Going!
      </button>
    </>
  );
};

const EventInteractions = () => {
  const [going, setGoing] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [interested, setInterested] = useState(false);

  const handleGoingClick = () => setGoing(!going);
  const handleFavoriteClick = () => setFavorite(!favorite);
  const handleInterestedClick = () => setInterested(!interested);

  return (
    <>
      <div className="interactions-container">
        {going || interested ? null : (
          <div className="going-and-interested">
            <button className="going" onClick={handleGoingClick}>
              Going!
            </button>
            <button className="interested" onClick={handleInterestedClick}>
              Interested
            </button>
          </div>
        )}
        <button
          className={`heart ${favorite ? "heart-blue" : ""}`}
          aria-label="Favorite"
          onClick={handleFavoriteClick}
        ></button>
      </div>

      {going ? <GoingMessage handleGoingClick={handleGoingClick} /> : null}
      {interested ? (
        <InterestedMessage
          handleGoingClick={handleGoingClick}
          handleInterestedClick={handleInterestedClick}
        />
      ) : null}
    </>
  );
};

export default EventInteractions;
