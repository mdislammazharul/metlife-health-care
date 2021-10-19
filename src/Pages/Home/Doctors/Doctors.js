import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Doctors = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id="doctors">
            <div className="row mx-5 mb-5">
                <h2 className="text-danger text-center my-5 display-2">MetLife Specialist</h2>
                {
                    services.map(service =>
                        <div className="col-12 col-lg-2 mb-3">
                            <Card className="card-style text-center h-100">
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.careTeam}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer>
                                    <small className="text-muted">Emergency: {service.phone}</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;