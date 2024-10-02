import React from 'react';
import './Skills.css';
import Chip from '@material-ui/core/Chip';
import FadeIn from 'react-fade-in';




function Skills() {
    
    const skills = [
        'React',
        'Firebase',
        'React-Router',
        'Context-Api',
        'Bootstrap',
        'JavaScript',
        'PHP',
        'JQuery',
        'CSS',
        'SCSS',
        'Material-UI',
        'Node.js',
        'GIT',
        'MySQL',
        'Computer Technician'
    ];
    return (
        <div className="skills">
            <FadeIn>
                {skills.map((skill,i) => (
                    <Chip size="small" color="primary" label={skill}key={i} />
                ))}
            </FadeIn>

        </div>
    )
}

export default Skills
