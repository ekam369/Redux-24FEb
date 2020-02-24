import axios from 'axios';

export default () => {
    return axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
}