import { Tabs } from "./Tabs";

const accountTabLabels = ["Favorite", "Interested", "Going", "Calendar"];

const Header = ({ isAccountPage }) => {
  const tabLabels = isAccountPage
    ? accountTabLabels
    : ["Music", "Sport", "Business", "Food", "Art"];

  return (
    <header id="header" className="header">
      <a
        href={isAccountPage ? "./index.html" : "./account.html"}
        id="my-account"
      >
        {isAccountPage ? "← Back to events" : "My account →"}
      </a>
      <Tabs tabLabels={tabLabels} />
    </header>
  );
};

export { Header };
