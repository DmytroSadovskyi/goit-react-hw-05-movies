import { useState, useEffect } from 'react';
import Pagination from 'components/Pagination/Pagination';
import MoviesList from 'components/MoviesList';
import { fetchTrendingMovies } from 'services/movie-api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async page => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchTrendingMovies(page);
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies(page);
  }, [page]);

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
          <h1>Tranding movies</h1>
          {isLoading && <Loader />}
          <MoviesList movies={movies} />
          <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </main>
  );
};

export default Home;
