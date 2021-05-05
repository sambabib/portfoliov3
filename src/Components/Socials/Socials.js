import Github from './github.svg';
import Twitter from './twitter.svg';
import LinkedIn from './linkedin.svg';
import Arrow from './arrow-up.svg';
import './Socials.scss';

const socials = [
  {
    id: 1,
    name: 'Github',
    url: 'https://github.com/sambabib',
    image: Github,
  },
  {
    id: 2,
    name: 'Twitter',
    url: 'https://twitter.com/__kitts',
    image: Twitter,
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/emmanuel-akala-8768871b1',
    image: LinkedIn,
  },
];

const Socials = () => {
  return (
    <div className='socials' id='socials'>
      <h3 id='socials-heading'>Connect with me 🌐</h3>
      <p id='text'>
        Rumor has it that I'm pretty awesome, if you've heard of my
        awesomeness and you wanna say hello, you can find me here.
      </p>
      <div className='connect'>
        {socials.map((social) => {
          return (
            <div className='connect-links' key={social.id}>
              <a className='links' href={social.url} target='__blank' rel='noreferrer'>
                <img src={social.image} alt='github' />
                <p id='socials'>{social.name}</p>
                <img src={Arrow} alt='arrow' />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
