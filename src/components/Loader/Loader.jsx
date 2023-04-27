import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="blue"
        ariaLabel="ball-triangle-loading"
      />
    </LoaderContainer>
  );
};

export default Loader;
