import React from 'react';
import { Layout, Typography, Row, Col, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import '../Component/cssFiles/footer.css'; 

const { Footer } = Layout;
const { Text, Title } = Typography;

const FooterComponent = () => {
    return (
        <Footer className="footer">
            <Row gutter={16} className="footer-content">
                <Col span={24} md={8} className="footer-section">
                    <Title level={4} className="footer-title">Contact Information</Title>
                    <Text>Email: kishankul1156gmail.com</Text><br />
                    <Text>Phone: +919657662346</Text>
                </Col>
                <Col span={24} md={8} className="footer-section">
                    <Title level={4} className="footer-title">Social Media</Title>
                    <div className="social-media-icons">
                        <Button type="link" href="https://github.com/username" target="_blank" rel="noopener noreferrer" icon={<GithubOutlined />} />
                        <Button type="link" href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" icon={<LinkedinOutlined />} />
                        <Button type="link" href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" icon={<TwitterOutlined />} />
                        <Button type="link" href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" icon={<InstagramOutlined />} />
                        <Button type="link" href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" icon={<FacebookOutlined />} />
                    </div>
                </Col>
                <Col span={24} md={8} className="footer-section">
                    <Title level={4} className="footer-title">About Me</Title>
                    <Text>
                        I am a passionate Web Developer specializing in creating dynamic and responsive web applications. With a strong background in modern technologies, I aim to build high-quality and innovative solutions.
                    </Text>
                </Col>
            </Row>
            <div className="footer-bottom">
                <Text>© {new Date().getFullYear()} Kishan Kulkarni. All Rights Reserved.</Text>
            </div>
        </Footer>
    );
};

export default FooterComponent;
