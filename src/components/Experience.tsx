import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Tech Company A',
            duration: 'June 2021 - Present',
        },
        {
            title: 'Intern',
            company: 'Tech Company B',
            duration: 'January 2021 - May 2021',
        },
        {
            title: 'Freelancer',
            company: 'Various Clients',
            duration: 'June 2020 - December 2020',
        },
    ];

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.company}</p>
                        <p>{exp.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;