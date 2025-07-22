import axios from "axios";
import Cookies from "js-cookie";
const getNewTokens = async () => {
  const refreshToken = Cookies.get("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(
      "http://localhost:6500/auth/refresh-token",
      { refreshToken },
    );
    return response;
  } catch (err) {
    return { err };
  }
};
export default getNewTokens;
