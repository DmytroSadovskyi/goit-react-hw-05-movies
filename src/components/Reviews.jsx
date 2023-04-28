import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import Loader from './Loader/Loader';

const Reviews = () => {
  const { Id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { data, results, total_results } = await fetchMovieReviews(Id);
        setMovieReviews(results);
        setTotalResults(total_results);
        console.log(data);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovieReviews();
  }, [Id]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {isLoading && <Loader />}
          {totalResults === 0 && !error ? (
            <p>We didn't find any reviews for this movie</p>
          ) : (
            <ul>
              {movieReviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
