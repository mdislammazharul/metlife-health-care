import React from 'react';

const HealthTips = () => {
    return (
        <div>
            <div className="row me-0 ms-5">

                <div className="col col-lg-6 d-flex align-items-center">
                    <h2 className="text-danger">Please Wait Some Time</h2>
                    <p>Your Live Consultancy Will be Started Very Soon</p>
                </div>
                <div className="col col-lg-4 my-5">
                    <iframe width="600px" height="480px" src="https://www.youtube.com/embed/vSSuWAqYMqk">
                    </iframe>
                </div>

            </div>
        </div>
    );
};

export default HealthTips;