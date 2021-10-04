import { useState } from 'react';
// @components
import PortfolioProjects from '../../components/PortfolioProjects/PortfolioProjects';
import PortfolioImages from '../../components/PortfolioImages/PortfolioImages';

// @utils
import { portfolioData } from '../../utils/portfolioData/';

import './Portfolio.scss';

// @assets
import neat from '../../assets/neat.svg';

const Portfolio = () => {
  const [clicked, setIsClicked] = useState(null);

  const handleClick = () => {
    portfolioData.map((item) => setIsClicked(item.img));
    console.log('this is clicked image', clicked);
  };

  return (
    <div className='portfolio container'>
      <div className='portfolio__container'>
        <div className='portfolio__img'>
          {clicked ? (
              <PortfolioImages clicked={clicked} />
          ) : (
            <img className='hand__img' src={neat} alt='neat hand' />
          )}
        </div>
        <div className='portfolio__items'>
          <div className='portfolio__item'>
            {portfolioData.map((item) => (
              <PortfolioProjects
                key={item.id}
                title={item.title}
                id={item.id}
                number={item.id}
                click={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
