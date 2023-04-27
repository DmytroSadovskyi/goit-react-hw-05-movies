import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import Loader from './Loader/Loader';
const Cast = () => {
  const { Id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCast(Id);
        console.log(cast);
        setMovieCast(cast);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovieCast();
  }, [Id]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {isLoading && <Loader />}
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              overflowY: 'scroll',
              width: '800px',
              height: '400px',
              listStyle: 'none',
            }}
          >
            {movieCast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
                  }
                  alt={name}
                  width="150"
                  height="200"
                />
                <p>
                  <span>{name}</span>
                </p>
                <p>
                  <span>{character}</span>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Cast;
