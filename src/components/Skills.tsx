import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
        { category: 'Frameworks', items: ['React', 'Node.js', 'Express'] },
        { category: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
        { category: 'Tools', items: ['Git', 'Docker', 'Webpack'] },
    ];

    return (
        <div className="skills">
            <h2>Skills</h2>
            {skills.map((skillSet, index) => (
                <div key={index} className="skill-category">
                    <h3>{skillSet.category}</h3>
                    <ul>
                        {skillSet.items.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;