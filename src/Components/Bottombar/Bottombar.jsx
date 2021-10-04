import { Link } from 'react-router-dom';
import './Bottombar.scss';

const Bottombar = () => {
  return (
    <div className='bottombar'>
      <div className='bottombar__container'>
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
