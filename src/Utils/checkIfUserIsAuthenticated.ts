import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const checkIfUserIsAuthenticated = () => {
  // Retrieve the JWT token from the cookie
  const token = Cookies.get("token"); // Use the cookie name you set on the server-side

  if (token) {
    try {
      // Decode the token to extract the expiration date
      const decodedToken: any = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Convert current time to seconds

      // Check if the token has expired
      if (decodedToken.exp < currentTime) {
        // Token has expired, user is not authenticated
        return false;
      }

      // Token is valid, user is authenticated
      return true;
    } catch (error) {
      // Invalid token format or decoding error
      console.error("Invalid token:", error);
      return false;
    }
  }

  // No token found, user is not authenticated
  return false;
};

export default checkIfUserIsAuthenticated;
