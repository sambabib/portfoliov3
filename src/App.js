import { Helmet } from 'react-helmet';
import DesktopView from './Components/DesktopView/DesktopView';
import ResponsiveLayout from './Components/ResponsiveLayout';
import MobileView from './Components/MobileView/MobileView';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Kite | Folio</title>
      </Helmet>
      <div className='app'>
        <ResponsiveLayout
          breakpoint={768}
          showDesktop={() => <DesktopView />}
          showMobile={() => <MobileView />}
        />
      </div>
    </>
  );
};

export default App;
