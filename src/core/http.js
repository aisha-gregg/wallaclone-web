import Axios from "axios";

const http = Axios.create({
  baseURL: `http://ec2-3-135-224-116.us-east-2.compute.amazonaws.com:3000/api/`
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
