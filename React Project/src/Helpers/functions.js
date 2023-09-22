import jwtDecode from "jwt-decode";

export const getUserInfo = (token) => {
  token ??= localStorage.getItem("token");
  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch {}
  return decoded;
};

export const getUserType = (token) => {
  const decoded = getUserInfo(token);
  if (!decoded) {
    return "guest";
  }
  if (decoded.isAdmin) {
    return "admin";
  }
  if (decoded.isBusiness) {
    return "business";
  }
  return "regular";
};
