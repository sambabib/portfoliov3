import Github from './github.svg';
import Share from './share.svg';
import './Work.scss';

const Work = ({ id, title, live, github }) => {
  return (
    <div ckassName='work'>
      <div className='grid'>
        <div className='project-links'>
          <a href={github} target='_blank' rel='noreferrer'>
            <img src={Github} alt='code link' />
          </a>
          <a href={live} target='_blank' rel='noreferrer'>
            <img src={Share} alt='live link' />
          </a>
        </div>
        <div className='project-title'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Work;
