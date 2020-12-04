import axios from 'axios'
import apiKey from './apiKey'

export function getMovieData(title){

    const key = apiKey();

    axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=${key}&t=It's+a+wonderful+life`
    })
    .then((response) => response)
    .catch((error) => console.log(error))
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
        "How the Grinch Stole Christmas (2000)",
        "A Christmas Carol (2009)",
        "A Muppet Christmas Carol",
        "The Grinch (2018)",
        "Love Actually",
        "The Knight Before Christmas",
        "A Christmas Prince",
        "The Christmas Chronicles",
        "Santa Claus: The Movie",
        "The Holiday",
        "Last Christmas",
        "The Polar Express",
        "Miracle on 34th St (1994)",
        "Bad Santa",
        "Ernest Saves Christmas",
        "The Preacher's Wife",
        "Krampus	Frosty the Snowman",
        "Gremlins",
        "How The Grinch Stole Christmas (1966)",
    ]
}