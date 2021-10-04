import './Home.scss';

// @components
import About from '../../components/About/About';
import Bottombar from '../../components/Bottombar/Bottombar';

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
