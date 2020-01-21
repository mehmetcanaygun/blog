import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogState from "./context/BlogState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Archive from "./components/pages/Archive";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

const App = () => {
  return (
    <BlogState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/archive" component={Archive} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </BlogState>
  );
};

export default App;
