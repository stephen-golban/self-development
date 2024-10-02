import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import fire from '../../firebase/fireB';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faProjectDiagram, faLaptopCode, faMobile, faHeadset, faDatabase, faUserCog, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Skills from '../Skills/Skills';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import { AuthContext } from "../../firebase/Auth";
const db = fire.firestore();



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    typo: {
      width:"100%",
      display:"flex",
      justifyContent:"flex-start",
      flexDirection:"column",
      color:"gray",
    },
    tab2: {
      width:"100%",
      display:"flex",
      flexDirection:"column",
      color:"gray",
    }
    
  }));
  

function AppRight() {

  

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const {currentUser} = useContext(AuthContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState('Recent');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
   if (sort === "Recent") {
    const fetchProjects = async() => {
      const projectCollection = await db.collection('projects').orderBy("timestamp", "desc").get()
      setProjects(projectCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchProjects();
   } else if (sort === "React"){
    const fetchProjects = async() => {
      const projectCollection = await db.collection('projects').where("main", "==", "React").get()
      setProjects(projectCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchProjects();
   } else {
    const fetchProjects = async() => {
      const projectCollection = await db.collection('projects').where("functionality", "==", "true").get()
      setProjects(projectCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchProjects();
   }
  },[sort])
    return (
        <Paper elevation={10} className="app__right">
          <Link to={currentUser ? "/upload" : "/admin"} title="Admin Page"><IconButton><MoreVertIcon /></IconButton></Link>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
            <Tab icon={<FontAwesomeIcon icon={faAddressCard} size="lg"/>}  label="About me" {...a11yProps(0)} />
            <Tab icon={<FontAwesomeIcon icon={faProjectDiagram} size="lg"/>} label="Portfolio" {...a11yProps(1)} />
            <Tab icon={<FontAwesomeIcon icon={faUserCog} size="lg"/>} label="Skills" {...a11yProps(2)} onClick={() => {setChecked(true)}}/>
        </Tabs>
        <TabPanel value={value} index={0} className={classes.typo}>
            <div className="header">
              <Typography variant="h5" style={{fontSize:"30px",paddingTop:"40px", color:"rgb(39, 39, 39)"}}><b>About me</b></Typography>
              <Typography style={{paddingTop:"7px"}}>Hi, I am Stefan and I'm specializing more in creating optimized and well-built websites in React (Front-end and FullStack).</Typography>
              <Typography style={{paddingTop:"4px"}}>I speak English, Romanian, Russian and few Italian .</Typography>
            </div>
            <div className="doing" >
            <Typography variant="h5"><b>What I'm doing</b></Typography>
              <div className="doing__things">
                <div className="side">
                  <div className="thing">
                    <FontAwesomeIcon icon={faLaptopCode} size="lg"/>
                    <div className="part">
                        <h3>Front-end Development</h3>
                        <p>Able to deliver the best version of your website front end built in React or in pure HTML/CSS/JS.</p>
                    </div>
                  </div>

                  <div className="thing">
                    <FontAwesomeIcon icon={faMobile} size="lg"/>
                    <div className="part">
                        <h3>Responsive Design</h3>
                        <p>Able to create mobile-responsive websites at a professional level.</p>
                    </div>
                  </div>
                </div>

                <div className="side">
                  <div className="thing">
                    <FontAwesomeIcon icon={faDatabase} size="lg"/>
                    <div className="part">
                        <h3>Back-end Development</h3>
                        <p>Able to make your website functional, user-friendly and "alive".</p>
                    </div>
                  </div>

                  <div className="thing">
                    <FontAwesomeIcon icon={faHeadset} size="lg"/>
                    <div className="part">
                        <h3>Strong Support</h3>
                        <p>Able to communicate ideas in a brief way.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tab2}>
          <div className="header">
                <Typography variant="h5" style={{fontSize:"30px",paddingTop:"40px", color:"rgb(39, 39, 39)"}}><b>Portfolio</b></Typography>
          </div>
          <ButtonGroup size="small" aria-label="small outlined button group" style={{marginTop:"20px"}}>
            <Button onClick={() => setSort('Recent')}>Recent</Button>
            <Button onClick={() => setSort('React')}>React</Button>
            <Button onClick={() => setSort('true')}>Login Functionality</Button>
          </ButtonGroup>
          <div className="project__container">
            {projects.map((project,i) => (
              <div className="project" key={i}>
                  <div className="project__inner">
                    <div className="front__part">
                        <img src={project.image} alt={project.name}/>
                    </div>
                    <div className="back__part">
                      <h1 className="project__name">
                        {project.name}
                      </h1>
                      <p className="project__tech">
                        <span>Built in : </span>{project.main}
                      </p>
                      <div className="project__links">
                        <a href={project.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} title="Demo" size="lg"/></a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodeBranch} title="Github" size="lg"/></a>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.typo}>
          <Skills checked={checked}/>
        </TabPanel>
        </Paper>
    )
}

export default AppRight
