import React from 'react';
import {MainImage, Hair, Skin, Weight} from '../source';
const HomePageComponent = () => {
    return(<div style={{paddingTop: '12vh', backgroundImage: `url(${MainImage})`,
     height: '70vh', backgroundSize: "cover"}}>
        <div style={{backgroundColor: 'white', border: '1px solid whitesmoke', 
        height: '42vh', width: '39vw', margin: '8vh auto', display: 'flex',
        justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '25px', }}>
            <h1>Bodywise Wellness</h1>
            <p style={{textAlign: 'center'}}>We are the country's first holistic wellness platform for men. We talk to men, listen to them and understand their needs</p>
            <h3>What's your concern?</h3>
            <span style={{display: 'flex', flexDirection: 'row'}}>
                <img 
                src={Hair}
                alt="hair"
                height="80"
                />
                 &#8287; &#8287; &#8287;
                <img 
                src={Skin}
                alt="hair" height="80"
                />
                 &#8287; &#8287; &#8287;
                <img 
                src={Weight}
                alt="hair" height="80"
                />
            </span>
        </div>

        <div style={{textAlign: 'center', backgroundColor: 'lightgray', padding: '7px'}}>
            <h2>Not sure where to start? We can help</h2>
            <p>Let's understand you a bit by asking a few questions before you talk to our experts</p>
            <button style={{width: '10rem', height: '2rem'}}>Get Started</button>
        </div>

        <div style={{textAlign:'center'}}>
            <h1>How it Works</h1>
        </div>
        
    </div>)
}

export default HomePageComponent;