import axios from 'axios';

export const BASE_URL = "http://localhost:8000/api";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken',
});


export default client;