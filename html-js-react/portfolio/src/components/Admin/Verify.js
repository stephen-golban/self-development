import React, { useContext } from 'react';
import './Verify.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/Auth";
import { Button, Paper } from '@material-ui/core';

function Verify({ emailError, passwordError }) {
    const {currentUser} = useContext(AuthContext);

    const handleonclick = () => {
        const login = document.querySelector(".login > .MuiPaper-root");
        const verification = document.querySelector(".verify");
        verification.classList.remove("verification__active");
        verification.classList.add("verification__inactive");
        setTimeout(() => {
            login.classList.remove("login__active");
            login.classList.add("login__inactive");
        }, 200);
    }
    return (
        <div className="verify">
            {
                currentUser && emailError === '' && passwordError === '' ?
                <Paper elevation={10}>
                    <h1 style={{color:"#3F51B5"}}>Hello {currentUser.email}, access granted</h1>
                    <p>Click the button below to sign in !</p>
                    <Link to="/upload">
                        <Button variant="outlined" color="primary">Sign in</Button>
                    </Link> 
                </Paper> : 
                <Paper elevation={10}>
                    <h1 style={{color:"red"}}>Access not granted!</h1>
                    <p>Click the button below to return back !</p>
                    <Button variant="outlined" color="primary" onClick={handleonclick}>Verify Me Again</Button>
                </Paper>  
            }
            
        </div>
    )
}

export default Verify
