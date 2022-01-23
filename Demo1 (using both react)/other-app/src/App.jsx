import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "main_app/Header";
import Footer from "main_app/Footer";

const App = () => (
  <div className="container">
    <Header/>
    <div className="content">
      From react 2 (other-app)
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
