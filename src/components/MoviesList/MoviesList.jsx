import { useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  Wrapper,
  Image,
  StyledLink,
  Text,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ poster_path, title, id }) => (
        <ListItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <Wrapper>
              <Image
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
                }
                alt={title}
              />
              <Text>{title}</Text>
            </Wrapper>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;
