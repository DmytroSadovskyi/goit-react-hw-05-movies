import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movie-api';
import { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { Id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieDetails(Id);
        setMovieInfo(result);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovieDetails();
  }, [Id]);

  const { title, release_date, poster_path, vote_average, overview } =
    movieInfo;

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go Back</Link>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {isLoading && <Loader />}
          <h1>
            {title}(
            {release_date?.slice(0, 4) ? release_date?.slice(0, 4) : 'Unknown'})
          </h1>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
            }
            alt={title}
            width="150"
            height="200"
          />
          <span>User score{Math.round(vote_average * 10)}%</span>
          <h2>Overview</h2>
          <p>{overview}</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
