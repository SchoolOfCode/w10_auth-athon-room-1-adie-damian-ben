import LoginButton from "../login";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="body-content">
        <h1>Welcome, to Navbar Park.</h1>
      </div>
      <div className="body-content">
        <h1>Your FIRST port of call for all things Navbar.</h1>
        <h1>👎 NOT THIS 👎</h1>
        <img src="https://i.imgur.com/pl5dEja.png" alt="Navbarrrr" />
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
