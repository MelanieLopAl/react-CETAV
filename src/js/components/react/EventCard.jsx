import formatDate from "../../utils/format-date";

const EventCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <div className="gallery_text">
        <div className="event_info">
          <h3>{props.title}</h3>
          <p className="date">{formatDate(new Date(props.date))}</p>
          <p>
            {props.location.address}
            {props.location.city}
            {props.location.state}
          </p>
          <strong>{props.price}</strong>
        </div>
      </div>
    </div>
  );
};
export { EventCard };
