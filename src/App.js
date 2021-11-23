import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// @components
import Home from './screens/Home/Home';
import SayHello from './screens/SayHello/SayHello';
import Topbar from './components/Topbar/Topbar';
import Portfolio from './screens/Portfolio/Portfolio';

const App = () => {
  return (
    <>
        <Router>
          <Helmet>
            <title>Kite | Folio</title>
          </Helmet>
          <div className="app">
            <Topbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/sayhello'>
                <SayHello />
              </Route>
              <Route exact path='/portfolio'>
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </Router>
    </>
  );
};

export default App;
