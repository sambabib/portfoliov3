import logo from '../MobileHeader/logo.svg';
import close from './close.svg';
import line from './line.svg';
import './MobileMenu.scss';

const menu = [
  {
    id: 1,
    link: '/',
    title: 'Home',
  },
  {
    id: 2,
    link: '#projects',
    title: 'Projects',
  },
  {
    id: 3,
    link: '#socials',
    title: 'Connect with me',
  },
];

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div className='mobile-menu'>
      <div className='menu-layer'>
        <div className='mobile-close'>
          <img className='logo' src={logo} alt='logo' />
          <div className='closebtn-container' onClick={() => setOpen(!open)}>
            <img className='close' src={close} alt='close btn' />
          </div>
        </div>
        <div className='menu-items'>
          <nav>
            {menu.map((item) => {
              return (
                <>
                  <div className='menu-flex'>
                    <img src={line} alt='menu line' />
                    <ul>
                      <li key={item.id} onClick={() => setOpen(!open)}>
                        <a
                          href={item.link}
                          style={{ textDecoration: 'none', color: '#fff' }}
                        >
                          {item.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
