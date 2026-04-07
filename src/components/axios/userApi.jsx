import axios from 'axios'


const api = axios.create({
    baseURL: "http://localhost:3000/api/students"

})

export const loginPost = (data) => {
    return api.post(`/login`,data)
}
export const registerPost = (data) => {
    return api.post(`/register`, data)
}