import './PortfolioProjects.scss';

const PortfolioProjects = ({ title, id, number, click }) => {
  return (
      <div className='portfolio__projects'>
        <div className='portfolio__projects__container' key={id}>
          <p className='portfolio__project__number'>{number}.</p>
          <p className='portfolio__project__title' onClick={() => click()}>
            {title}
          </p>
        </div>
      </div>
  );
};

export default PortfolioProjects;
