import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '92d66af10495782dbf7116658cb2e14f';

export async function fetchTrendingMovies(page) {
  try {
    const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoviesByName(page, query) {
  try {
    const searchParams = new URLSearchParams({
      api_key: '92d66af10495782dbf7116658cb2e14f',
      query: query,
      page: page,
      include_adult: false,
    });
    const url = `${BASE_URL}search/movie?${searchParams}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCast(id) {
  try {
    const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieReviews(id) {
  try {
    const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
