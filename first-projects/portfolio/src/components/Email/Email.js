import React from 'react';
import './Email.css';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Email() {
    const classes = useStyles();
    
    const handleOnClick = () => {
        const app = document.querySelector(".app");
        const emailF = document.querySelector(".email__form");
        app.classList.remove("app__inactive");
        app.classList.add("app__active");
        setTimeout(() => {
            emailF.classList.remove("email__formInactive");
            emailF.classList.add("email__formActive");
            app.style.display = "none";
            emailF.style.display = "block";
        }, 500);
      
        
    }

    return (
        <div className="email">
            <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<EmailIcon />}
                    onClick={handleOnClick}
                >
                    Email me
            </Button>
        </div>
    )
}

export default Email
