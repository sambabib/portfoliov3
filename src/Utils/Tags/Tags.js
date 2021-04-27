import './Tags.scss'

const Tags = ({ id, name }) => {
    return (
        <div className='tags'>
            <div className="project-tags" key={id}>
                <p className='tag-name'>{name}</p>
            </div>
        </div>
    )
}

export default Tags;