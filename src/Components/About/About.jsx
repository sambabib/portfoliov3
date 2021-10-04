import './About.scss';

// @assets
import gangsta from '../../assets/gangsta.svg';

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__text'>
          <h3>I'm Emmanuel, a frontend engineer out of Lagos, Nigeria.</h3>
        </div>
        <div className='about__img'>
          <img src={gangsta} alt='gangsta hands' />
        </div>

        <div className='about__links'>
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
