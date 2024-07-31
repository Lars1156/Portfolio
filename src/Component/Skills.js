import React from 'react';
import { Card, Col, Row } from 'antd';
import { CodeOutlined, Html5Outlined,AppstoreAddOutlined, AppstoreOutlined, DatabaseOutlined } from '@ant-design/icons';
import '../Component/cssFiles/skills.css'; 

const { Meta } = Card;

const skills = [
    { title: 'JavaScript', icon: <CodeOutlined /> },
    { title: 'HTML', icon: <Html5Outlined /> },
    { title: 'Bootstrap', icon: <AppstoreAddOutlined /> },
    { title: 'React.js', icon: <AppstoreOutlined /> },
    { title: 'Express.js', icon: <DatabaseOutlined /> },
    { title: 'MongoDB', icon: <DatabaseOutlined /> },
    
];

const Skills = () => {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <Row gutter={16}>
                {skills.map((skill, index) => (
                    <Col span={8} key={index}>
                        <Card
                            hoverable
                            cover={<div className="card-icon">{skill.icon}</div>}
                        >
                            <Meta title={skill.title} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Skills;
