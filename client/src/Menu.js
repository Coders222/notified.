import React from 'react';
import img1 from './images/AccountingLogo.png';
import img2 from './images/MathLogo.png';
import img3 from './images/ScienceLogo.png';
import './Menu.css';

function Images(){

    return(
        <div>
            <img style={{ width: 97, height: 108 }} src={img2} alt="Math Logo"/>
            <img style={{ width: 120, height: 117 }} src={img3} alt="Science Logo"/>
            <img style={{ width: 121, height: 117 }} src={img1} alt="Accounting Logo"/>
        </div>
    )
}

export default Images;