import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./login";
import LogoutButton from "./logout";
import ProfileInfo from "./pages/ProfileInfo";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
