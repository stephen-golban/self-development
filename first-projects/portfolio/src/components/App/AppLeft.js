import React from 'react';
import "./App.css";
import Avatar from '@material-ui/core/Avatar';
import Paper  from '@material-ui/core/Paper';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Email from '../Email/Email';

function AppLeft() {
    return (
        <Paper elevation={10} className="app__left">
          <Avatar alt="Remy Sharp" src="images/me.jpg" className="avatar" />
          <Typography variant="h4" gutterBottom>Stefan <b>Golban</b></Typography>
          <Chip size="medium" label="Web Developer" color="primary"/>
          <div className="social__row">
            <a href="https://www.instagram.com/stefann__/" target="_blank" rel="noopener noreferrer">
              {<InstagramIcon />}
            </a>
            <a href="https://github.com/stef703" target="_blank" rel="noopener noreferrer">
              {<GitHubIcon />}
            </a>
            <a href="https://www.linkedin.com/in/stefan-golban-282a061b6/" target="_blank" rel="noopener noreferrer">
              {<LinkedInIcon />}
            </a>
          </div>
          <div className="location">
            <div className="birthday">
              <EventAvailableIcon/>
              <Typography variant="h5" gutterBottom>September, 1st 2001</Typography>
            </div>
            <div>
              <LocationOnIcon/>
              <Typography variant="h5" gutterBottom>Chisinau, Moldova</Typography>
            </div>
          </div>
          <Email/>
        </Paper>
    )
}

export default AppLeft
