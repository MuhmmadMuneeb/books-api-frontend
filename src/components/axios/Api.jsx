import axios from 'axios'


const api = axios.create({
    baseURL: "http://localhost:3000/api/books"

})
const getAuthHeaders = () => {
    const token = localStorage.getItem('token'); // Make sure you store it after login
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const getDta = () => {
    return api.get("/",getAuthHeaders())
}
export const Deletebook = (id) => {
    return api.delete(`/${id}`,getAuthHeaders())
}
export const AddBook = (bookData) => {
    return api.post(`/`,bookData,getAuthHeaders())
}
export const EditBook = (id,bookData) => {
    return api.put(`/${id}`,bookData,getAuthHeaders())
}

export const getSingle = (id) => {
    return api.get(`/${id}`,getAuthHeaders())
}
