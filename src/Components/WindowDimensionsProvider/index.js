import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

export const WindowDimensionsContext = createContext(null);

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions]);

  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};
export const useWindowsDimensions = () =>  useContext(WindowDimensionsContext);

export default WindowDimensionsProvider;
