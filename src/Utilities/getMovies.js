import axios from 'axios'
import apiKey from './apiKey'

export function getMovieData(queryString){

    const key = apiKey();

    let data = axios({
        method: 'get',
        url: `https://www.omdbapi.com/?apikey=${key}&t=${queryString}`
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))

    return data;
}

export default function getMovies(){

    return [
        "Elf",
        "Die Hard",
        "Home Alone",
        "Home Alone 2",
        "Christmas Vacation",
        "Scrooged",
        "A Charlie Brown Christmas",
        "A Christmas Story",
        "Klaus",
        "It's A Wonderful Life",
        "White Christmas",
        "The Santa Clause",
        "Just Friends",
        "Rudolph the Red-Nosed Reindeer",
        "How the Grinch Stole Christmas",
        "A Christmas Carol",
        "The Muppet Christmas Carol",
        "The Grinch",
        "Love Actually",
        "The Knight Before Christmas",
        "A Christmas Prince",
        "The Christmas Chronicles",
        "Santa Claus: The Movie",
        "The Holiday",
        "Last Christmas",
        "The Polar Express",
        "Miracle on 34th Street",
        "Bad Santa",
        "Ernest Saves Christmas",
        "The Preacher's Wife",
        "Krampus",	
        "Frosty the Snowman",
        "Gremlins",
        "How The Grinch Stole Christmas!",
    ]
}

export function formatQueryString(movieTitle){
    return movieTitle.replace(/\s/g,"+");
}