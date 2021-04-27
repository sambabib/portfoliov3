import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Components/Projects/Projects';
import Socials from './Components/Socials/Socials';
import './App.css';

const routes = [
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
  return (
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
  );
};

export default App;
