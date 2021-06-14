import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Socials from '../Socials/Socials';
import copyright from '../../Images/copyright.svg';
import './DesktopView.css';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <About />,
  },
  {
    path: '/projects',
    exact: true,
    main: () => <Projects />,
  },
  {
    path: '/socials',
    exact: true,
    main: () => <Socials />,
  },
];

const DesktopView = () => {
  const date = new Date().getFullYear();

  return (
      <Router>
        <div className='desktop-view'>
          <Home />
          <Navigation />
          <div className='side'>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={route.main}
                  />
                );
              })}
            </Switch>
          </div>
          <div className='footer-txt'>
            <img src={copyright} alt='copyright' />
            <p>Kite {date}</p>
          </div>
        </div>
      </Router>
  );
};

export default DesktopView;
