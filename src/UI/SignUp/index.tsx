import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Carousel from '../../components/Carousel'


function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setErrorName] = useState('')
    const [emailError, setErrorEmail] = useState('')
    const [passwordError, setErrorPassword] = useState('')
    const history = useHistory()
    const create = () => {
        if(name === '') {
            setErrorName('*Este campo não pode ser vazio')
        }
        if(email === '') {
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
        } else if (password.length < 6) {
            setErrorPassword('*A senha não pode ter menos de 6 caracteres ')    
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col md={6} className="carousel-class hidden-sm"><Carousel /></Col>
                <Col xs={12} sm={12} md={6}>
                    <Row className="input-invision">
                        <Col className="text-right invision-title"><b>Invision</b></Col>
                    </Row>
                    <Row className="subtitle-margin">
                        <Col className="text-center invision-subtitle">Getting Started</Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={10} sm={10} md={10}>
                            <Form>
                                <span className="error">{nameError}</span>
                                <Form.Group>
                                    <Form.Label className="label-input">Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(ev) => setName(ev.target.value)}
                                    />
                                </Form.Group>
                                <span className="error">{emailError}</span>
                                <Form.Group>
                                    <Form.Label className="label-input">Users name or Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Users name or Email"
                                        value={email}
                                        onChange={(ev) => setEmail(ev.target.value)}
                                    />
                                </Form.Group>
                                <span className="error">{passwordError}</span>
                                <Form.Group>
                                    <Form.Label className="label-input">Create Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Create Password"
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className="btn-confirm" onClick={() => create()}>Sign up</Button>
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
                        <Col className="text-center invision-text">By signing up, you agree to <b>Invision</b></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="text-center"><span className="blue-link">Terms of Conditions</span> and <span className="blue-link">Privacy Policy</span></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="text-center invision-text">Already on <b>Invision</b>? <span className="blue-link" onClick={() => history.push('/')}>Log in</span></Col>
                    </Row>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;
