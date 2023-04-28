import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movie-api';
import { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Section,
  GoBackLink,
  MovieTitle,
  MoviePosterWrapper,
  MoviePoster,
  UserScore,
  ListOfLinks,
  InfoLink,
} from './MovieDetails.styled';

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
    <main>
      <Section>
        <GoBackLink to={backLinkLocationRef.current}>Go Back</GoBackLink>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {isLoading && <Loader />}
            <MovieTitle>
              {title}(
              {release_date?.slice(0, 4)
                ? release_date?.slice(0, 4)
                : 'Unknown'}
              )
            </MovieTitle>
            <MoviePosterWrapper>
              <MoviePoster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
                }
                alt={title}
                width="150"
                height="200"
              />
              <UserScore>
                User score: {Math.round(vote_average * 10)}%
              </UserScore>
            </MoviePosterWrapper>
            <h2>Overview</h2>
            <p>{overview}</p>
            <ListOfLinks>
              <li>
                <InfoLink to="cast">Cast</InfoLink>
              </li>
              <li>
                <InfoLink to="reviews">Reviews</InfoLink>
              </li>
            </ListOfLinks>

            <Outlet />
          </>
        )}
      </Section>
    </main>
  );
};

export default MovieDetails;
