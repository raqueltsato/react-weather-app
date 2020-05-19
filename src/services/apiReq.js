import axios from 'axios';

const apiReq = axios.create({
    baseURL: "https://reqres.in/api/",
})

export default apiReq;