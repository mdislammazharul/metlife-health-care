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
                <h2 className="text-danger d-flex justify-content-center my-5 display-2">MetLife Specialist</h2>
                {
                    services.map(service =>
                        <div className="col col-lg-2">
                            <div className="card-style h-100">
                                <Card>
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
                        </div>
                    )
                }
            </div>

            {/*  */}
        </div>
    );
};

export default Doctors;