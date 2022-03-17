
import { useCookies } from "react-cookie";

const TOKEN_NAME = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiZmEyOWNmOWEtM2RlMi00MGExLTlhMjktYTA4YWM3MjcwOGNjIiwiZnVsbE5hbWUiOiJWYW5lc3NhIE1heXJhIE1hY2VkbyBIdWFtYW4iLCJlbWFpbCI6Im1haHVhLmVhQGdtYWlsLmNvbSIsImlhdCI6MTY0NzAzOTE0OX0.31uptpveYXZtIdi-9JZkX7Zt9z7t3cu-kWQahK5GJ5c";

// custom hook to handle authToken - we use compositon to decouple the auth system and it's storage
export const useAuthToken = () => {
  
  //we use react-cookies to access our cookies
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
  
  // this function allows to save any string in our cookies, under the key "authToken"
  const setAuthToken = (authToken) => setCookie(TOKEN_NAME, authToken);
  
  //this function removes the key "authToken" from our cookies. Useful to logout
  const removeAuthToken = () => removeCookie(TOKEN_NAME);
  
  return [cookies[TOKEN_NAME], setAuthToken, removeAuthToken];
};