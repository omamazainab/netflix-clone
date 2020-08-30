const API_KEY = '3a43e32d072f5f5d520f67541e836179';

const baseUrl= 'https://api.themoviedb.org/3'

export const trending = `${baseUrl}/trending/all/day?api_key=${API_KEY}&language=en-US`;
export const netflixOriginals = `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const top_rated = `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const upcoming = `${baseUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US`;
export const comedy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const fantasy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=14`
export const romance = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const thriller = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=53`

export const baseImgUrl = 'https://image.tmdb.org/t/p/original'
