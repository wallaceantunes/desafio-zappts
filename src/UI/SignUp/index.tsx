import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'

function SignUp() {
    return (
        <Container>
            <Row>
                <Col md={6}>Carousel</Col>
                <Col md={6}>
                    <Row className="input-invision">
                        <Col className="text-right invision-title"><b>Invision</b></Col>
                    </Row>
                    <Row className="subtitle-margin">
                        <Col className="text-center invision-subtitle">Welcome to Invision</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={10}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="label-input">Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="label-input">Users name or Email</Form.Label>
                                    <Form.Control type="text" placeholder="Users name or Email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="label-input">Create Password</Form.Label>
                                    <Form.Control type="password" placeholder="Create Password" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button className="btn-confirm">Sign in</Button>
                    </Row>
                    <hr className="hr-text" data-content="OR" />
                    <Row className="justify-content-md-center">
                        <Button className="btn-google">
                            <Image
                                className="img-google"
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                width="30px"
                                height="30px"
                            />
                            Sign in with Google
                        </Button>
                    </Row>
                    <br />
                    <Row>
                        <Col className="text-center invision-text">By signing up, you agree to <b>Invision</b></Col>
                    </Row>
                    <Row>
                        <Col className="text-center"><span className="blue-link">Terms of Conditions</span> and <span className="blue-link">Privacy Policy</span></Col>
                    </Row>
                    <Row>
                        <Col className="text-center invision-text">Already on <b>Invision</b>? <span className="blue-link">Log in</span></Col>
                    </Row>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;
