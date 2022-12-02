import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className="body-content">
        <h1>
          Welcome, to Jurassic Park.
        </h1>
        <LoginButton/>
        <Profile />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
