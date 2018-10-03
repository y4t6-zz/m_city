import React from 'react';
import Featured from './featured';
import Matches from './matches';

const Home = (props) => {
    return (
        <div className='bck_blue'>
            <Featured/>
            <Matches/>
        </div>
    );
};

export default Home;