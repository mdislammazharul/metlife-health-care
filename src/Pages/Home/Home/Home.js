import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import HealthHacks from '../HealthHacks/HealthHacks';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Doctors />
            <HealthHacks />
        </div>
    );
};

export default Home;