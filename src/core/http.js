import Axios from "axios";

const http = Axios.create({
  baseURL: `${process.env.API_URL}/api/`
});

http.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token !== undefined) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    alert(error.response.data.error);
    return Promise.reject(error);
  }
);

export { http };
