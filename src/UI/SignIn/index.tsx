import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Carousel from '../../components/Carousel'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const history = useHistory()
    const login = () => {
        if (email === '') {
            setErrorEmail('*Este campo não pode ser vazio')
        } else if (email !== '' && email !== null) {
            if (!email.includes('@')) {
                setErrorEmail('*O e-mail está incorreto')
            } else {
                setErrorEmail('')
            }
        }
        if(password === '') {
            setErrorPassword('*Este campo não pode ser vazio')
        } else {
            setErrorPassword('')
        }
    };
    return (
        <Container fluid>
            <Row>
                <Col md={6} className="carousel-class hidden-sm"><Carousel /></Col>
                <Col xs={12} sm={12} md={6}>
                    <Row className="input-invision">
                        <Col className="text-right invision-title"><b>Invision</b></Col>
                    </Row>
                    <Row className="justify-content-center subtitle-margin">
                        <Col className="text-center invision-subtitle">Welcome to Invision</Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={10} sm={10} md={10}>
                            <Form>
                                <span className="error">{errorEmail}</span>
                                <Form.Group>
                                    <Form.Label className="label-input">Users name or Email</Form.Label>
                                    <Form.Control
                                        className={
                                            errorEmail === '' ? '' : 'errorInput'
                                        }
                                        type="text"
                                        value={email}
                                        onChange={(ev) => setEmail(ev.target.value)}
                                        placeholder="Users name or Email"
                                    />
                                </Form.Group>
                                <span className="error">{errorPassword}</span>
                                <Form.Group>
                                    <Form.Label className="label-input">Password</Form.Label>
                                    <Form.Control
                                        className={
                                            errorPassword === '' ? '' : 'errorInput'
                                        }
                                        type="password"
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}
                                        placeholder="Password"
                                    />
                                    <Form.Text className="text-right cursor">Forgot password?</Form.Text>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className="btn-confirm" onClick={() => login()}>Sign in</Button>
                    </Row>
                    <hr className="hr-text" data-content="OR" />
                    <Row className="justify-content-center">
                        <Button className="btn-google">
                            <Image
                                className="img-google"
                                src="/img/logo-google.png"
                                width="30px"
                                height="30px"
                            />
                            Sign in with Google
                        </Button>
                    </Row>
                    <br />
                    <Row className="justify-content-center">
                        <Col className="text-center invision-text">New <b>Invision</b>? <span className="blue-link" onClick={() => history.push('/create')}>Create Account</span></Col>
                    </Row>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;
