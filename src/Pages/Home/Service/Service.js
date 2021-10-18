import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;
    // console.log(service);
    return (
        <div className="service pb-3 col col-lg-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;