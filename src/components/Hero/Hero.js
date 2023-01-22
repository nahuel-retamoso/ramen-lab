import { forwardRef } from 'react';
import './Hero.css';

const Hero = ({}, ref) => {

    return (
        <div ref={ref} className="hero">
            <img className='gif' src='ramen.gif' alt='ramen'></img>
            <h3 className="tagline">
            Slurp up the authentic taste of japan
            </h3>
        </div>
    );
    }

export default forwardRef(Hero);