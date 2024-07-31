import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { UserOutlined, LaptopOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import '../Component/cssFiles/about.css'; 

const { Title, Paragraph } = Typography;

const About = () => {
    return (
        <section className="about-section">
            <Title level={2} className="about-title">About Me</Title>
            <Row gutter={16}>
                <Col span={24} md={12}>
                    <Card className="about-card">
                        <Title level={3} className="about-name">Kishan Kulkarni</Title>
                        <Paragraph className="about-description">
                            I am a passionate and dedicated Web Application Developer with a strong foundation in web technologies. As a fresher, I am eager to apply my skills in JavaScript, React, and other web development tools to contribute to innovative projects and grow as a developer.
                        </Paragraph>
                        <Paragraph className="about-info">
                            <UserOutlined /> <span>Web Application Developer</span>
                        </Paragraph>
                        <Paragraph className="about-info">
                            <LaptopOutlined /> <span>Technologies: JavaScript, React, Node.js, HTML, CSS, Bootstrap , MongoDB, MySQL</span>
                        </Paragraph>
                        <Paragraph className="about-info">
                            <EnvironmentOutlined /> <span>Location: Pune City,India</span>
                        </Paragraph>
                        <Paragraph className="about-info">
                            <PhoneOutlined /> <span>Contact:(9657662346)Email:kishankul1156@gmail.com</span>
                        </Paragraph>
                    </Card>
                </Col>
                <Col span={24} md={12}>
                    <Card className="experience-card">
                        <Title level={3} className="experience-title">Experience</Title>
                        <Paragraph className="experience-info">
                             <span>Company Name: ScaleFull Technologies LLP</span>
                        </Paragraph>
                        <Paragraph className="experience-info">
                             <span>Website: <a href="https://www.abctech.com" target="_blank" rel="noopener noreferrer">abctech.com</a></span>
                        </Paragraph>
                        <Paragraph className="experience-info">
                            <span>Position: Junior Web Developer</span>
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
            
        </section>
    );
};

export default About;

