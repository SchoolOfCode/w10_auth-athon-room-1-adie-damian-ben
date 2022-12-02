import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import LoginButton from "../../login"
import LogoutButton from "../../logout"

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
          const domain = "dev-5uco73j0c5ynntg8.uk.auth0.com";
    
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
    
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
    
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

        return (
            isAuthenticated && (
                <div className="Navbar">
                    <ul>
                        <span id="nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/settings">Settings</a></li>
                        </span>
                        <span id="nav1">
                            <li><LogoutButton/></li>
                            <li id="profile"><img src={user.picture} alt="profile"/>Hi, {user.name}!</li>
                        </span>
                    </ul>
                </div>
            )
        )
}

export default Navbar