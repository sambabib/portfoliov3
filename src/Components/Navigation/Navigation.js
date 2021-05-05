import { Link } from 'react-router-dom';
import './Navigation.scss';

const navigation = [
  {
    id: 1,
    number: '01',
    link: '/',
    title: 'Home',
  },
  {
    id: 2,
    number: '02',
    link: '/projects',
    title: 'Projects',
  },
  {
    id: 3,
    number: '03',
    link: '/socials',
    title: 'Connect with me',
  },
];

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation-items'>
        <h3>Navigation</h3>
        {navigation.map((item) => {
          return (
            <p key={item.id}>
              <Link
                to={item.link}
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <span id='number'>{item.number}/</span>
                {item.title}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
