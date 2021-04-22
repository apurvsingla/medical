import React from 'react'
import { Hair, Skin, Weight} from '../../source';
import './mainSection.scss';

function MainSection() {
    return (
        <div className="mainSectionImp">
            <h1>Bodywise Wellness</h1>
            <p style={{textAlign: 'center'}}>We are the country's first holistic wellness platform for men. We talk to men, listen to them and understand their needs</p>
            <h3>What's your concern?</h3>
            <span style={{display: 'flex', flexDirection: 'row'}}>
                <img 
                src={Hair}
                alt="hair"
                className="imagess"
                style={{cursor: 'pointer'}}
                />
                 &#8287; &#8287; &#8287;
                <img 
                style={{cursor: 'pointer'}}
                src={Skin}
                className="imagess"
                alt="hair"
                />
                 &#8287; &#8287; &#8287;
                <img style={{cursor: 'pointer'}}
                src={Weight}
                className="imagess"
                alt="hair"
                />
            </span>
        </div>
    )
}

export default MainSection
