import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// @components
import PortfolioProjects from '../../components/PortfolioProjects/PortfolioProjects';

// @utils
import { portfolioData } from '../../utils/portfolioData/';

import './Portfolio.scss';

// @assets
import neat from '../../assets/neat.svg';

const Portfolio = () => {
  const portfolioImgRef = useRef(null);
  const projectRef = useRef([]);

  const tl = useRef();

  useEffect(() => {
    projectRef.current = projectRef.current.slice(0);
    tl.current = gsap
      .timeline({
        defaults: { duration: 0.7, ease: 'power4.out', opacity: 1 },
      })
      .to(portfolioImgRef.current, {
        delay: 0.3,
        y: -20,
      })
      // .to(projectRef.current, {
      //   y: -60,
      // });
  }, []);

  return (
    <div className='portfolio container'>
      <div className='portfolio__container'>
        <div className='portfolio__img' ref={portfolioImgRef}>
          <img className='hand__img' src={neat} alt='neat hand' />
        </div>
        <div className='portfolio__items'>
          <div className='portfolio__item'>
            {portfolioData.map((item, i) => (
              <div
                className='project__item'
                ref={(el) => (projectRef.current[i] = el)}
              >
                <PortfolioProjects
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  number={item.id}
                  description={item.description}
                  tags={item.tags}
                  live={item.live}
                  code={item.code}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
