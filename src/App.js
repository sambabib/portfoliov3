import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Components/Projects/Projects';
import Socials from './Components/Socials/Socials';
import useMobile from './Utils/Mobile/useMobile';
import './App.css';
import MobileHeader from './Components/MobileHeader/MobileHeader';

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

const App = () => {
  const { width } = useMobile();

  return (
    <>
      {width <= 600 ? (
        <>
          <Helmet>
            <title>Kite | Folio</title>
          </Helmet>
          <div className='mobile-view'>
            <MobileHeader />
            <About />
            <Projects />
            <Socials />
          </div>
        </>
      ) : (
        <Router>
          <Helmet>
            <title>Kite | Folio</title>
          </Helmet>
          <div className='app'>
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
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
