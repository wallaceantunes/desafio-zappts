import React from 'react';
import { Carousel } from 'react-bootstrap'

function SignUp() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="img-carousel w-100"
                    src="/img/img-carousel.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Marcenas mattis egestas</h3>
                    <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-carousel w-100"
                    src="/img/img-carousel.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Marcenas mattis egestas</h3>
                    <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-carousel w-100"
                    src="/img/img-carousel.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Marcenas mattis egestas</h3>
                    <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SignUp;
