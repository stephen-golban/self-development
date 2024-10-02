import React from 'react';
import { Button, Paper } from '@material-ui/core';
import './Thanks.css';
import { Link } from 'react-router-dom';

function Thanks() {
    return (
        <Paper elevation={10} className="thanks">
            <div className="success">
                Thank you for getting in touch!
            </div>
            <div className="thanks__text">
                I will look over your message and get back to you by tomorrow. In the meantime, you can check the Portfolio section, look over my latest projects collection. <br></br>
                Your friend [Stefan]
            </div>
            <Link to="/">
                <Button variant="contained" color="primary">To Homepage</Button>
            </Link>
        </Paper>
    )
}

export default Thanks
