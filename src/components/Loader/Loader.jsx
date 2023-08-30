import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <CirclesWithBar
        height="100"
        width="100"
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#4fa94d"
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderBackdrop>
  );
};
export default Loader;
