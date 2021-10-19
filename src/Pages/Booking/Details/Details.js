import React from 'react';
import './Details.css'

const Details = (props) => {
    const { name, careTeam, description, img, cost } = props?.details || {};

    return (
        <div>
            <h1 className="my-5 d-flex justify-content-center">{name}</h1>
            <div className="card mb-5 container card-style">
                <div className="row g-0 mb-3">
                    <div className="col-md-4">
                        <img className="mt-3" src={img} alt="..." />
                        <br />
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-warning mt-5">Check Out This Service</button>
                            <button className="btn btn-danger mt-5">Call Energency</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{description}</p>
                            <p className="card-text"><strong>Specialists:</strong> {careTeam}</p>
                            <div className="mb-3">
                                <form action="/action_page.php">
                                    <label for="birthdaytime" className="me-3"><strong>Appointment Schedule:</strong> </label>
                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                                </form>
                            </div>
                            <h3>Charge: {cost}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;