import Axios from "axios";

const http = Axios.create({
    baseURL: 'http://192.168.0.12:5000/api/'
})

http.interceptors.response.use(response => {
    return response
}, error => {
    alert(error.response.data.error)
    return Promise.reject(error)
})

export { http }