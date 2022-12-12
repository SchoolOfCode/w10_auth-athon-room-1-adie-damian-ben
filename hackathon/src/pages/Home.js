import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import nav from "../images/nav.jpg"

const Home = () => {
  const {
    isAuthenticated,
  } = useAuth0();

  let navbarImage;
  let thisText;

  isAuthenticated ? (navbarImage = nav) : (navbarImage = "https://i.imgur.com/pl5dEja.png");
  isAuthenticated ? (thisText = "👍 THIS 👍") : (thisText = "👎 NOT THIS 👎")

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="body-content">
        <h1>Welcome, to Navbar Park.</h1>
      </div>
      <div className="body-content">
        <h1>Your FIRST port of call for all things Navbar.</h1>
        <h1>{thisText}</h1>
        <img src={navbarImage} alt="Navbarrrr" />
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
