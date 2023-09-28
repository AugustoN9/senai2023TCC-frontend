import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backendexactapatho.onrender.com/'
    //baseURL: 'http://localhost:3007'
});

export default api;
