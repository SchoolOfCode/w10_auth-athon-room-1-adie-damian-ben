import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import LoginButton from "../../login";
import LogoutButton from "../../logout";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = await `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  let userPicture;
  let userName;

  isAuthenticated
    ? (userPicture = user.picture)
    : (userPicture =
        "https://toppng.com/uploads/preview/red-question-mark-png-11552242986dielb7cmf4.png");

  isAuthenticated ? (userName = user.name) : (userName = "Guest");

  return (
    <div className="Navbar">
      <ul>
        <span id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </span>
        <span id="nav1">
          {isAuthenticated ? (
            <li>
              <LogoutButton />
            </li>
          ) : (
            <li>
              <LoginButton />
            </li>
          )}

          <li id="profile">
            <img src={userPicture} alt="profile" />
            Hi, {userName}!
          </li>
        </span>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navbar;
