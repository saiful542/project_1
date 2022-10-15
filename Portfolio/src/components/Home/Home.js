import React from 'react';
import Contact from '../Contact';
import Header from '../Header';
import Navigation from '../Navigation';
import Stack from '../Stack';
import Work from '../Work';

const Home = () => {
    return (
        <div>
            <Header />
            <Work />
            <Stack />
            <Contact />

        </div>
    );
};

export default Home;