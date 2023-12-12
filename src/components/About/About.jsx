import React from 'react';
import style from './About.module.css'
import aboutImage from '../../assets/about image (2).jpg'

const About = () => {
    return (
       <div className={style.home}>
        <img src={aboutImage} alt="" />
        <h1>About page</h1>
        
       </div>
    );
};

export default About;


