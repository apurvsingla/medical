import React from 'react'
import {Doctor} from '../../source';
import './Work.scss';

function WorkComponent() {
    const Work = ({i}) => {
        return(<div className="content">
        <div>
            <h2>{i}. Help us to know you</h2>
            <p style={{fontWeight: '600'}}>Know what are you looking for? Browse our carefully crafted solutions. Not sure what will work for you?
                Schedule a free online consultaion with our renowned experts.
            </p>
        </div>
    </div>)
    }
    return (
        <>
        <div style={{paddingTop: '40px'}}>
            <h1 style={{textAlign: 'center', letterSpacing: '0.1rem'}}>How It Works</h1>
        </div>
        <div className="mainWork" >
            <img 
            src={Doctor}
            className="doctor"
            alt='think'
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Work i={1}/>
                <Work i={2}/>
                <Work i={3}/>
            </div>
        </div>
        </>
    )
}

export default WorkComponent
