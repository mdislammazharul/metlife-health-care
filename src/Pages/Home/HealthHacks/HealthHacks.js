import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

const HealthHacks = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./hacks.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id="hacks">
            <div className="row mx-5 mb-5">
                <h2 className="text-danger d-flex justify-content-center my-5 display-2">MetLife Health Hacks</h2>
                {
                    services.map(service =>
                        // console.log(service)
                        <Accordion>
                            <Accordion.Item eventKey={service.id}>
                                <Accordion.Header>{service.name}</Accordion.Header>
                                <Accordion.Body>
                                    {service.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                }
            </div>
        </div >
    );
};

export default HealthHacks;