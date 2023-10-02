import formatDate from "../../utils/format-date";
import EventInteractions from "./EventInteractions";

const EventCard = (props) => {
  const { title, image, date, location, price } = props;
  const formattedDate = formatDate(new Date(date));

  return (
    <li className="gallery__card">
      <img src={image} alt={title} />
      <div className="gallery__text">
        <div className="event__info">
          <h3>{title}</h3>
          <p className="date">{formattedDate}.</p>
          <p>
            {location.address} • {location.city}, {location.state}.
          </p>
          <strong>{price}</strong>
        </div>
        <EventInteractions />
      </div>
    </li>
  );
};

export default EventCard;
