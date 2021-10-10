import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import './Topbar.scss';

// @assets
import logo from '../../assets/logo.svg';

const Topbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log('state changing');
  };

  const topBarRef = useRef(null);

  useEffect(() => {
    gsap.to(topBarRef.current, {
      duration: .6,
      y: 12,
      opacity: 1,
      ease: 'power4.out',
    })
  }, [])

  return (
    <div className='topbar'>
      <div className='topbar__container' ref={topBarRef}>
        <div className='topbar__logo'>
          <Link to='/'>
            <img src={logo} alt='my logo' />
          </Link>
        </div>
        <div className='topbar__hello' onClick={handleClick}>
          {!isClicked ? (
            <Link to='/sayhello'>
              <h4>say hello.</h4>
            </Link>
          ) : isClicked ? (
            <Link to='/'>
              <h4 className='topbar__goback'>
                <span>
                  <ArrowBackSharpIcon />
                </span>
                go home.
              </h4>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
