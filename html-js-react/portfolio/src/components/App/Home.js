import React from "react";
import "./App.css";
import AppLeft from "./AppLeft";
import AppRight from "./AppRight";
import EmailForm from "../Email/EmailForm";

function Home() {
  return (
    <>
      <h1>OUTDATED!!! (This was created in 2019)</h1>
      <div className="app">
        <AppLeft />
        <AppRight />
      </div>
      <EmailForm />
    </>
  );
}

export default Home;
