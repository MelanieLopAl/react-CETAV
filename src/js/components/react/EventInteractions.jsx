const GoingMessage = () => {
  return (
    <>
      <span className="check">✔</span>
      <div>
        <p>You`re going to this event!.</p>
        <button className="button-link">Changed your mind?</button>
      </div>
    </>
  );
};

const InterestedMessage = () => {
  return (
    <>
      <div>
        <p>You`re interested in going.</p>
        <button className="button-link">Changed your mind?</button>
      </div>
      <button className="going">Going!</button>
    </>
  );
};

export const EventInteractions = () => {
  return (
    <>
      <div className="interactions-container">
        <div className="going-and-interested">
          <button className="going">Going!</button>
          <button className="interested">Interested</button>
        </div>
        <button className="heart" aria-label="favorite"></button>
      </div>
      <GoingMessage />
      <InterestedMessage />
    </>
  );
};
