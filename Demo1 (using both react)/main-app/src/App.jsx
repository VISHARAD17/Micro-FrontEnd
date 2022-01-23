import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

const App = () => (
  <div className="container">
    <Header/>
    <div className="content">
      some text
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
