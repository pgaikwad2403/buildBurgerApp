import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-2403.firebaseio.com/'
});

export default instance;