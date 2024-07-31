// src/components/ContactUs.js
import React from 'react';
import { Card, Col, Row, Typography, Button, Form, Input } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';
import '../Component/cssFiles/contact.css'; // Make sure to create this CSS file for styling

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
        // You can handle form submission here
    };

    return (
        <section className="contact-us-section">
            <Title level={2} className="contact-us-title">Contact Me</Title>
            <Row gutter={16}>
                {/* Social Media Card */}
                <Col span={24} md={12}>
                    <Card className="contact-card">
                        <Title level={3} className="contact-title">Get in Touch</Title>
                        <Paragraph className="contact-description">
                            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me through the following platforms:
                        </Paragraph>
                        <div className="social-media-icons">
                            <Button type="link" href="https://github.com/username" target="_blank" rel="noopener noreferrer" icon={<GithubOutlined />} />
                            <Button type="link" href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" icon={<LinkedinOutlined />} />
                            <Button type="link" href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" icon={<TwitterOutlined />} />
                            <Button type="link" href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" icon={<InstagramOutlined />} />
                            <Button type="link" href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" icon={<FacebookOutlined />} />
                        </div>
                        <Paragraph className="contact-info">
                            <MailOutlined /> <span>Email:-kishankul1156@gmail.com</span>
                        </Paragraph>
                    </Card>
                </Col>
                {/* Contact Form Card */}
                <Col span={24} md={12}>
                    <Card className="contact-form-card">
                        <Title level={3} className="form-title">Contact Form</Title>
                        <Form
                            name="contact_form"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input placeholder="Your Name" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
                            >
                                <Input placeholder="Your Email" />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please input your message!' }]}
                            >
                                <TextArea rows={4} placeholder="Your Message" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default ContactUs;
