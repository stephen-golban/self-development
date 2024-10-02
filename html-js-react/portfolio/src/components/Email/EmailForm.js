import React from "react";
import Paper from "@material-ui/core/Paper";
import "./EmailForm.css";
import "./Email.css";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Thanks from "./Thanks";
import Loader from "../../Loader";
import NetlifyForm from "react-netlify-form";

function EmailForm() {
  const handleOnClick = () => {
    const emailF = document.querySelector(".email__form");
    const app = document.querySelector(".app");
    emailF.classList.remove("email__formActive");
    emailF.classList.add("email__formInactive");
    setTimeout(() => {
      app.style.display = "flex";
      emailF.style.display = "none";
      app.classList.add("app__inactive");
      app.classList.remove("app__active");
    }, 700);
  };

  return (
    <Paper elevation={10} className="email__form">
      <div className="first__row">
        <ArrowBackIcon onClick={handleOnClick} />
        <Typography variant="h3">Email me </Typography>
      </div>
      <NetlifyForm name="contact">
        {({ loading, error, success }) => (
          <div>
            {loading && <Loader />}
            {error && (
              <div>
                Your information was not sent. Please try again later <Loader />
              </div>
            )}
            {success && <Redirect to="/thanks" />}
            {!loading && !success && (
              <div>
                <div
                  className="form__row"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <PersonIcon />
                  <TextField label="Name" name="name" />
                </div>
                <div
                  className="form__row"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ChatIcon />
                  <TextField label="Email" name="email" />
                </div>
                <div
                  className="form__row"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <AlternateEmailIcon />
                  <TextField label="Message" name="message" />
                </div>
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </div>
            )}
          </div>
        )}
      </NetlifyForm>
    </Paper>
  );
}

export default EmailForm;
