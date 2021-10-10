import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.scss';

// @assets
import gangsta from '../../assets/gangsta.svg';

const About = () => {
  const bioRef = useRef(null);
  const bioImgRef = useRef(null);
  const sideLinksRef = useRef(null);

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power4.out',
          stagger: {
            amount: 0.2,
          },
        },
      })
      .to(bioRef.current, {
        delay: 0.6,
        y: -40,
        opacity: 1,
      })
      .to(bioImgRef.current, {
        y: -40,
        opacity: 1,
      })
      .to(sideLinksRef.current, {
        y: -40,
        opacity: 1,
      });
  }, []);

  return (
      <div className='about'>
        <div className='about__container'>
          <div className='about__text' ref={bioRef}>
            <h3>I'm Adekite, a frontend engineer out of Lagos, Nigeria.</h3>
          </div>
          <div className='about__img' ref={bioImgRef}>
            <img src={gangsta} alt='gangsta hands' />
          </div>

          <div className='about__links' ref={sideLinksRef}>
            <a href='https://github.com/sambabib' target='__blank'>
              <p>github</p>
            </a>
            <a href='https://twitter.com/__kitts' target='__blank'>
              <p>twitter</p>
            </a>
            <a href='https://www.instagram.com/__kitts/' target='__blank'>
              <p>instagram</p>
            </a>
          </div>
        </div>
      </div>
  );
};

export default About;
