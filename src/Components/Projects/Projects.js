import Work from '../../Utils/Work/Work';
import Tags from '../../Utils/Tags/Tags';
import './Projects.scss';

const projects = [
  {
    id: 1,
    title: 'Robofriends',
    live: 'https://sambabib.github.io/robofriends/',
    github: 'https://github.com/sambabib/robofriends',
    tags: [{ id: 1, name: 'react' }],
  },
  {
    id: 2,
    title: 'Amazon Clone',
    live: 'https://github.com/sambabib/amazon-clone',
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
    title: 'ImgUploader',
    live: '',
    github: 'https://github.com/sambabib/imguploader',
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
    github: 'https://github.com/sambabib/smartbrain',
    tags: [
      { id: 1, name: 'react' },
      { id: 2, name: 'node.js' },
      { id: 3, name: 'express.js' },
      { id: 4, name: 'postgresql' },
    ],
  },
  {
    id: 5,
    title: 'GithubRepo Search',
    live: '',
    github: 'hhttps://github.com/sambabib/github-repo-page',
    tags: [
      { id: 1, name: 'html' },
      { id: 2, name: 'scss' },
      { id: 3, name: 'javascript' },
      { id: 4, name: 'graphql' },
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
              <div className='project-grid'>
                <Work
                  id={project.id}
                  title={project.title}
                  live={project.live}
                  github={project.github}
                  key={project.id}
                />
                <div className='project-stack'>
                  {project.tags.map((tag) => {
                    return <Tags key={tag.id} id={tag.id} name={tag.name} />;
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
