import React from 'react';
import './HealthTips.css'

const HealthTips = () => {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="d-flex justify-content-center text-danger my-5 display-2">Live Consultancy and Health Tips</h1>
                {/* <iframe width="360px" height="640px" src="https://www.youtube.com/embed/vSSuWAqYMqk">
                    </iframe> */}
                <div>
                    <iframe className="container-fluid" height="715" src="https://www.youtube.com/embed/vSSuWAqYMqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </div>
        </div>
    );
};

export default HealthTips;