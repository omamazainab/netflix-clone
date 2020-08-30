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

export const MovieType = {
    TRENDING: {
        title: 'trending',
        url: trending
    },
    NETFLIXORIGINALS: {
        title: 'netflixOriginals',
        url: netflixOriginals
    },
    HORROR: {
        title: 'horror',
        url: horror
    },
    THRILLER: {
        title: 'thriller',
        url: thriller
    },
    ACTION: {
        title: 'action',
        url: Action
    },
    ROMANCE: {
        title: 'romance',
        url: romance
    },
    COMEDY: {
        title: 'comedy',
        url: comedy
    },
    TOP_RATED: {
        title: 'top_rated',
        url: top_rated
    },
    FANTASY:  {
        title: 'fantasy',
        url: fantasy
    },
    UPCOMING:  {
        title: 'upcoming',
        url: upcoming
    }
}

export const fetchMovies = async (movieType) => {

    const data = fetch(movieType)
        .then(res => res.json());
    return data;
}