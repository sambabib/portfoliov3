import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation-items'>
        <h3>Navigation</h3>
        <p>
          <span id='number'>01/</span>Resume
        </p>
        <p>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            <span id='number'>02/</span>Home
          </Link>
        </p>
        <p>
          <Link to='/projects' style={{ textDecoration: 'none', color: '#fff' }}>
            <span id='number'>03/</span>Projects
          </Link>
        </p>
        <p>
          <Link to='/socials' style={{ textDecoration: 'none', color: '#fff' }}>
            <span id='number'>04/</span>Socials
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navigation;
