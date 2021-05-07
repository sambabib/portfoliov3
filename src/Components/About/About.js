import './About.scss';
import cartman from './eric-cartman.jpg';


const resumeLink = 'https://drive.google.com/file/d/1TSaPgiJXbrS-t1UCDpDXcoYCCYEiDK-i/view?usp=sharing'

const About = () => {
  return (
    <div className='about'>
      <div className='intro'>
        <div className='image-container'>
          <img src={cartman} alt='avatar' />
        </div>
        <div className="mobile-intro">
          <h3>Kite Akala</h3>
          <p>Frontend Engineer</p>
        </div>
        <p>
          Hi, I write frontend code out of a space pod in Lagos, Nigeria. In my
          spare time I'm a UI enthusiast, when I'm not binge watching sitcoms, I
          paint rainbows in the sky. My favorite sitcom's The Office && Eric
          Cartman's my spirit cartoon character. 😀
        </p>
        <div className="resume-cta">
          <a href={resumeLink} target='_blank' rel='noreferrer'>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
