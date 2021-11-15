import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about";
import ContactMe from "./components/Contact me";
import Home,{History} from "./components/home";
import Nav from './components/nav';


const ShowContext = React.createContext(null);

const responseGoogle = (response) => {
  
  console.log(response);
} 

const App = () => {
  return (
    <ShowContext.Provider value="">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </Router>

    </ShowContext.Provider>
  );
};

export default App;
