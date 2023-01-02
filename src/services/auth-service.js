import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

const register = (number) => {
  return axios.post("http://localhost:3000/api/auth/signup", {
    number,
  });
};

const login = (number) => {
  return axios
    .post(API_URL + "signin", {
      number,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {register, login, logout} 

export default AuthService;