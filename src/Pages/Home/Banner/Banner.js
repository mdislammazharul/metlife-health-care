import React from 'react';
import { Carousel } from 'react-bootstrap';
import physician from '../../../images/banner/physician.jpg'
import diagonosis from '../../../images/banner/diagonosis.jpg'
import operation from '../../../images/banner/operation.jpg'
import ambulance from '../../../images/banner/ambulance.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="container-fluid">
                    <div>
                        <img
                            className="d-block img-fluid"
                            src={physician}
                            alt="First slide"
                        />
                        <div>
                            <h1 className="text-danger fw-bold d-flex justify-content-center">Expert Medical Specialists</h1>
                            <h4 className="text-light bg-dark d-flex justify-content-center">There are many types of doctor, and a person’s specific concern will usually determine the type of doctor they choose.</h4>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={diagonosis}
                        alt="Second slide"
                    />

                    <div>
                        <h1 className="text-danger fw-bold">Advanced Diagnostic Centre</h1>
                        <h4 className="text-light bg-dark">We care your health, MetLife Diagnostic Centre Ltd. has a collection of the most advanced medical technologies for the patients.</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={operation}
                        alt="Third slide"
                    />
                    <div>
                        <h1 className="text-danger fw-bold">Modern Operation Theatres</h1>
                        <h4 className="text-light bg-dark">We are one of the leading private hospitals with state-of-the-art, fully equipped, divided in sterile zone (restricted zone), non-restricted zone.</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ambulance}
                        alt="Third slide"
                    />
                    <div>
                        <h1 className="text-danger fw-bold">Emergency Ambulance Service</h1>
                        <h4 className="text-light bg-dark">Need ambulance service near you? MetLife provides emergency ambulance service with life support and freezing support. Book now.</h4>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;