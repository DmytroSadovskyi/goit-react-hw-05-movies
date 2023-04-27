import { Outlet } from 'react-router-dom';
import { Header, Logo, Link } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { BiMoviePlay } from 'react-icons/bi';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Logo>
          <span role="img" aria-label="movie icon">
            <BiMoviePlay size="40" />
          </span>
          Movie App
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
