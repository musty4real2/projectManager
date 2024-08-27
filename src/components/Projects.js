import React, { useState } from 'react';

const Projects = (props) => {
    // Initialize state with useState hook
    const [projects, setProjects] = useState([
        { title: 'Business Website', category: 'Web design' },
        { title: 'Social Platform', category: 'Mobile development' },
        { title: 'Ecommerce shopping cart', category: 'Web development' }
    ]);

    return (
        <div className='Projects'>
            <h2>My Projects</h2>
            <p>{props.test}</p>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <strong>{project.title}</strong> - {project.category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
