import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome, to Jurassic Park.
        </h1>

        <LoginButton />
        <br></br>
        <LogoutButton />
        <br></br>
        <Profile />
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
