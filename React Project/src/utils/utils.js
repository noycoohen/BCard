export const servUrl = `http://localhost:8181`;
export const phoneRegex = /^050-9\d{6}$/;
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const headers = {
  headers: {
    "x-auth-token": JSON.parse(localStorage.getItem("token")),
  },
};
