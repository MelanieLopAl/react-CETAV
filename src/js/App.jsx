import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/react/Header";
import { MainContent } from "./components/react/MainContent";
import fetchEventsByCategories from "./services/api";

const isAccountPage = window.location.pathname.includes("account.html");

const App = () => {
  const [categoryData, setCategoryData] = useState([]);

  const onTabChange = (e) => {
    const category = e.target.dataset.category;
    const tabLabels = isAccountPage
      ? ["Favorite", "Interested", "Going", "Calendar"]
      : ["Music", "Sport", "Business", "Food", "Art"];
    if (isAccountPage) {
      const categoryIndex = tabLabels.indexOf(category);
      if (categoryIndex !== -1) {
        // lo de my account
      }
    } else {
      fetchEventsByCategories(category).then((data) => setCategoryData(data));
    }
  };

  return (
    <>
      <Header onTabChange={onTabChange} isAccountPage={isAccountPage} />
      <MainContent categoryData={categoryData} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
