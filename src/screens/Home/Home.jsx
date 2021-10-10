// @components
import About from '../../components/About/About';
import Bottombar from '../../components/Bottombar/Bottombar';

import './Home.scss';

const Home = () => {
  return (
      <div className='home container'>
        <About />
        <div className='home__footer'>
          <Bottombar />
        </div>
      </div>
  );
};

export default Home;
