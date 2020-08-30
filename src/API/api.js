import {
    trending,
    netflixOriginals,
    horror,
    thriller,
    Action,
    romance,
    comedy,
    top_rated,
    fantasy,
    upcoming
} from '../request'

const MovieType = {
    TRENDING : trending,
    NETFLIXORIGINALS : netflixOriginals,
    HORROR : horror,
    THRILLER : thriller,
    ACTION : Action,
    ROMANCE : romance,
    COMEDY : comedy,
    TOP_RATED : top_rated,
    FANTASY : fantasy,
    UPCOMING : upcoming
}

export const fetchMovies = async (movieType) => {

    await fetch(MovieType)
        .then(response => response.json())
        .then(data => console.log(data));
}