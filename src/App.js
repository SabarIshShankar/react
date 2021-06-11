import React, { Component } from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const navlinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" }
];

const brand = { name: "SWEET", to: "/" };
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand={brand} className="w3-black" links={navlinks} />

        <div className="container">
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        consequuntur quis enim consectetur ratione atque veritatis, debitis est.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="About w3-justify w3-row fonts">
      <div>
        <h2>About</h2>
        <h4>
          Forem ipsum dolor sit amet consectetur adipisicing elit.Forem ipsum
          dolor sit amet consectetur adipisicing elit.
        </h4>
        <p class="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          consequuntur quis enim consectetur ratione atque veritatis, debitis
          est. Nobis delectus error illo maiores, recusandae odio quasi aliquam
          nemo tenetur obcaecati, consectetur molestiae illum nesciunt atque sed
          totam laborum! Incidunt, non mollitia modi dicta reprehenderit porro
          quos ullam nostrum exercitationem maxime!
        </p>
      </div>
    </div>
  );
}
export default App;
