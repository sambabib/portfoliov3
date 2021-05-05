import Work from '../../Utils/Work/Work';
import Tags from '../../Utils/Tags/Tags';
import './Projects.scss';

const projects = [
  {
    id: 1,
    title: 'Robofriends',
    live: '',
    github: 'https://github.com/sambabib/robofriends',
    tags: [{ id: 1, name: 'react' }],
  },
  {
    id: 2,
    title: 'Amazon Clone',
    live: '',
    github: '',
    tags: [
      { id: 1, name: 'react' },
      { id: 2, name: 'node.js' },
      { id: 3, name: 'express.js' },
      { id: 4, name: 'context api' },
      { id: 5, name: 'firebase' },
    ],
  },
  {
    id: 3,
    title: 'Image Uploader',
    live: '',
    github: '',
    tags: [
      { id: 1, name: 'react' },
      { id: 2, name: 'node.js' },
      { id: 3, name: 'express.js' },
      { id: 4, name: 'mongodb' },
    ],
  },
  {
    id: 4,
    title: 'Smartbrain',
    live: '',
    github: '',
    tags: [
      { id: 1, name: 'react' },
      { id: 2, name: 'node.js' },
      { id: 3, name: 'express.js' },
      { id: 4, name: 'postgresql' },
    ],
  },
];

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h3 id='project-heading'>Projects 📁</h3>
      <div className='project-grid-initial'>
        {projects.map((project) => {
          return (
            <>
              <div className='project-grid' key={project.id}>
                <Work
                  id={project.id}
                  title={project.title}
                  live={project.live}
                  github={project.github}
                />
                <div className='project-stack'>
                  {project.tags.map((tag) => {
                    return <Tags id={tag.id} name={tag.name} />;
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
