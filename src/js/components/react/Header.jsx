import { homeTabs } from "../../config";

const Header = ({ onTabChange, isAccountPage }) => {
  const tabLabels = isAccountPage
    ? ["Favorite", "Interested", "Going", "Calendar"]
    : homeTabs.map((tab) => tab.label);

  return (
    <header id="header" className="header">
      <a
        href={isAccountPage ? "./index.html" : "./account.html"}
        id="my-account"
      >
        {isAccountPage ? "← Back to events" : "My account →"}
      </a>
      <div id="tabs" className="header__tabs">
        {tabLabels.map((label, index) => (
          <button
            data-category={homeTabs[index].category}
            key={homeTabs[index].category}
            onClick={onTabChange}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
};

export { Header };
