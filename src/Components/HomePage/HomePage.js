import React from 'react';
import {MainImage} from '../source';
import MainSection from './MainSection/MainSection';
import WorkComponent from './Work/WorkComponent';
import HairComponent from './HairComponent/HairComponent';
import {hairData, skinData, WeightData} from './data';
import {HomeComponent} from './HomePage.style';
import Carousel from 'react-material-ui-carousel'
import {useMediaQuery} from '../MediaQuery/MediaQuery';

const HomePageComponent = () => {
    let isPageWide = useMediaQuery('(min-width: 768px)')
    const [color, setColor] = React.useState(1);
    const colorChange = (i) => {
        setColor(i)
    }

    let inputStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '7px 10px',
        borderRadius: '25px',
    }

    const Button = () => {
        return(
        <div style={{textAlign: 'center', backgroundColor: 'lightgray', padding: '7px'}}>
            <h2>Not sure where to start? We can help</h2>
            <p>Let's understand you a bit by asking a few questions before you talk to our experts</p>
            <button style={{width: '15rem', height: '3rem',backgroundColor: 'black', 
            color: 'white', outline: 'none', border: 'none', cursor: 'pointer'}}>Get Started</button>
        </div>
        )
    }
    const Data = () => {
        return(<>
        {color===1? 
                <>
                <HairComponent data={hairData}/> 
                <HairComponent data={hairData}/> 
                <HairComponent data={hairData}/> 
                </>: color ===2 ? 
                <>
                <HairComponent data={skinData}/> 
                <HairComponent data={skinData}/> 
                <HairComponent data={skinData}/> 
                </>: color===3 ? 
                <>
                <HairComponent data={WeightData}/> 
                <HairComponent data={WeightData}/> 
                <HairComponent data={WeightData}/> 
                </>: null}
        </>)
    }
    return(
    <HomeComponent img={MainImage}>
        <MainSection />

        <Button />

        <div style={{textAlign:'center'}}>
            <h1>New Launches</h1>
            <span style={{backgroundColor: 'lightgray', 
            padding: '7px 10px 7px 10px', borderRadius: '25px', 
            cursor: 'pointer'}}>
                <span 
                onClick={() => colorChange(1)}
                style={color===1 ? inputStyle: null}
                >Hair</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                onClick={() => colorChange(2)}
                style={color===2 ? inputStyle: null}
                >Skin</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                onClick={() => colorChange(3)}
                style={color===3 ? inputStyle: null}
                >Weight</span>
            </span>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px', justifyContent: 'space-around'}}>
                {isPageWide? Data(): color===1? 
                <Carousel>
                    <HairComponent data={hairData}/> 
                    <HairComponent data={hairData}/> 
                    <HairComponent data={hairData}/> 
                </Carousel>
                : color ===2 ? 
                <Carousel>
                    <HairComponent data={skinData}/> 
                    <HairComponent data={skinData}/> 
                    <HairComponent data={skinData}/> 
                </Carousel>
                : color===3 ? 
                <Carousel>
                    <HairComponent data={WeightData}/> 
                    <HairComponent data={WeightData}/> 
                    <HairComponent data={WeightData}/> 
                </Carousel>
                : null}
            </div>
        </div>
        <br /><br /><br /><br />
        <Button />

        <WorkComponent />
    </HomeComponent>)
    
}

export default HomePageComponent;