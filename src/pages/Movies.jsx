import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';

import MoviesList from 'components/MoviesList';
import { fetchMoviesByName } from 'services/movie-api';
const Movies = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const loadMoviesByQuery = async (page, query) => {
      try {
        setIsLoading(true);
        const { results, total_pages, total_results } = await fetchMoviesByName(
          page,
          query
        );
        setMovies(results);
        setTotalPages(total_pages);
        setTotalResults(total_results);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMoviesByQuery(page, query);
  }, [page, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    if (!query) {
      alert('Please type something');
      return;
    }
    setSearchParams({ query });
    setPage(1);
    e.target.reset();
  };

  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
    const startIndex = selected * 20;
    const endIndex = startIndex + 20;
    setMovies(movies.slice(startIndex, endIndex));
  };

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <Searchbar onSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {totalResults === 0 && query && !error ? (
            <h2>No results found</h2>
          ) : (
            <>
              <MoviesList movies={movies} />
              <Pagination
                pageCount={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </main>
  );
};

export default Movies;
