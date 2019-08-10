import React from 'react';
import AmountControl from '../AmountControl';
import { directive } from '@babel/types';
import './Home.scss';

function Home() {
    return (
        <div className="Home">
            <h2>Home</h2>
            <AmountControl/>  
        </div>
    );
}

export default Home;
