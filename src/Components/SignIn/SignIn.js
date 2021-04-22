import React from 'react'
import {signInWithGoogle} from '../../firbase/firebase.utils';

function SignIn() {
    return (
        <div style={{paddingTop: "25vh",display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <button
            onClick={signInWithGoogle}
            style={{backgroundColor: 'black', color: 'white', fontWeight: '600', padding: '1.2rem', 
            border: 'none', outline: 'none', cursor: 'pointer'}}
            >Sign In With Google</button>
        </div>
    )
}

export default SignIn
