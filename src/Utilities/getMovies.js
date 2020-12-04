import axios from 'axios'
import apiKey from './apiKey'

export default function getMovie(title){

    const key = apiKey();

    axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=${key}&t=It's+a+wonderful+life`
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}