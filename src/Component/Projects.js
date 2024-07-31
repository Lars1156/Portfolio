// src/components/Projects.js
import React from 'react';
import { Card, Button, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import '../Component/cssFiles/projects.css'; // Make sure to create this CSS file for styling

const { Meta } = Card;

const projects = [
    {
        title: 'Fitness Web-Application',
        description: 'A brief description of Project One.',
        githubLink: 'https://github.com/username/project-one',
        image: 'https://via.placeholder.com/400x200'
    },
    {
        title: 'TravelGuide Web-Application',
        description: 'A brief description of Project Two.',
        githubLink: 'https://github.com/username/project-two',
        image: 'https://via.placeholder.com/400x200'
    },
    {
        title: 'Briyani-Shop Web-Application',
        description: 'A brief description of Project Three.',
        githubLink: 'https://github.com/username/project-three',
        image: 'https://via.placeholder.com/400x200'
    }
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <Row gutter={16}>
                {projects.map((project, index) => (
                    <Col span={8} key={index}>
                        <Card
                            hoverable
                            cover={<img alt={project.title} src={project.image} />}
                            actions={[
                                <Button
                                    type="link"
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    icon={<GithubOutlined />}
                                >
                                    View on GitHub
                                </Button>
                            ]}
                        >
                            <Meta title={project.title} description={project.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Projects;
