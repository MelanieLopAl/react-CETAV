import { createRoot } from "react-dom/client";
import { Header } from "./components/react/Header";
import { MainContent } from "./components/react/MainContent";

const isAccountPage = window.location.pathname.includes("account.html");

const App = () => {
  return (
    <>
      <Header isAccountPage={isAccountPage} />
      <MainContent />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
