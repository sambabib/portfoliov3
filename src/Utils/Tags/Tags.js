import './Tags.scss';

const Tags = ({ id, name }) => {
  return (
    <div className='tags'>
      <div className='project-tags'>
        <p className='tag-name' key={id}>{name}</p>
      </div>
    </div>
  );
};

export default Tags;
