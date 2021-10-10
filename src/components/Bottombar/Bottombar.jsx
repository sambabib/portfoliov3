import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Bottombar.scss';

const Bottombar = () => {
  const bottomBarRef = useRef(null);

  useEffect(() => {
    gsap.to(bottomBarRef.current, {
      duration: .8,
      y: 20,
      delay: 3,
      opacity: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className='bottombar'>
      <div className='bottombar__container' ref={bottomBarRef}>
        <div className='bottombar__credit'>
          <p className='bottombar__inspired'>inspired by Hoang Nguyen.</p>
          <p>
            you can check him{' '}
            <a href='https://hoang.moe' target='__blank'>
              <i>here:</i>
            </a>
          </p>
        </div>
        <div className='bottombar__portfolio'>
          <Link to='/portfolio'>
            <h4>portfolio.</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
