import { BallTriangle } from 'react-loader-spinner';
import { Background } from './Loader.styled';

const Loader = () => {
  return (
    <Background>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
      />
    </Background>
  );
};

export default Loader;
