import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// @style
import './PortfolioProjects.scss';

// @icons
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';

const PortfolioProjects = ({
  title,
  id,
  number,
  tags,
  description,
  live,
  code,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const portfolioInfoRef = useRef(null);
  // const upArrowRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const accordion = gsap.from(portfolioInfoRef.current, {
      duration: 0.8,
      ease: 'power4.out',
      height: 0,
      paused: true,
      reversed: true,
    });

    const openAccordion = () => {
      accordion.reversed() ? accordion.play() : accordion.reverse();
    };

    openAccordion();
  }, [isOpen]);

  return (
    <div className='portfolio__projects' onClick={toggleOpen}>
      <div className='portfolio__projects__container' key={id}>
        <p className='portfolio__projects__number'>{number}.</p>
        <p className='portfolio__projects__title'>{title}</p>
        {isOpen ? <KeyboardArrowUpSharpIcon /> : <KeyboardArrowDownSharpIcon />}
      </div>
      {isOpen && (
        <div className='portfolio__projects__info' ref={portfolioInfoRef}>
          <div className='portfolio__projects__description'>
            <p>{description}</p>
          </div>
          <div className='portfolio__projects__tags'>
            <div className='project__tags'>
              <p>{tags.join(', ')}</p>
            </div>
            <div className='portfolio__projects__links'>
              <a href={live} target='__blank'>
                <p>
                  Live{' '}
                  <span>
                    <VisibilitySharpIcon
                      style={{ fontSize: '1rem', display: 'block' }}
                    />
                  </span>
                </p>
              </a>
              <a href={code} target='__blank'>
                <p>
                  Code{' '}
                  <span>
                    <CodeSharpIcon
                      style={{ fontSize: '1rem', display: 'block' }}
                    />
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioProjects;
