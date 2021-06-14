import MobileHeader from '../MobileHeader/MobileHeader';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Socials from '../Socials/Socials';
import copyright from '../../Images/copyright.svg';
import './MobileView.scss';

const MobileView = () => {
  const date = new Date().getFullYear();

  return (
    <div className='mobile-view'>
      <MobileHeader />
      <About />
      <Projects />
      <Socials />

      <div className='footer-txt'>
        <img src={copyright} alt='copyright' />
        <p>Kite {date}</p>
      </div>
    </div>
  );
};

export default MobileView;
