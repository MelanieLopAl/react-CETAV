import { useEffect, useState } from "module";
import fetchEventsByCategories from "../../services/api";
import EventCard from "./EventCard";

const TabbedEventList = ({ categories }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      fetchEventsByCategories(selectedCategory).then((data) =>
        setCategoryData(data),
      );
    }
  }, [selectedCategory]);

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="header__tabs">
        {categories.map(({ category, label }) => (
          <button
            key={category}
            type="button"
            onClick={() => handleTabChange(category)}
          >
            {label}
          </button>
        ))}
      </div>
      <div>
        <ul className="container error-container gallery home-gallery">
          {categoryData.map((event) => (
            <EventCard
              key={event.id}
              price={event.price}
              date={event.date}
              title={event.title}
              image={event.image}
              location={event.location}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabbedEventList;
