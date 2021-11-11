import logo from './logo.svg';
import './App.css';
import {Component} from "react"; 
import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import Main from "./Main"; 
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Employees from "./Employees";
import Login from "./Login";
import Signup from "./Signup";
import Transactions from "./Transactions";
import SendMoney from './SendMoney';

function App() {
  return (
    <div >
      {/*<First>*/}
    
      <Router >
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/About"> About </Link>
      </div>

      <div>
        <Link to="/Contact"> Contact </Link>
      </div>
      {/*<div>
        <Link to="/Login"> Login </Link>
      </div>
      <div>
        <Link to="/Signup"> Sign up </Link>
      </div>
    */}
      
      <hr/>
      <Switch>
      
      <Route exact path="/"> <Home/>  </Route>
      <Route  path="/Contact"> <Contact/>  </Route>
      <Route  path="/Login"> <Login/>  </Route>
      <Route exact path="/Main"><Main /> </Route>
      <Route exact path="/Main/Transactions"><Transactions /> </Route>
      <Route path="/Main/SendMoney"><SendMoney /> </Route>

      <Route path="/About"> <About />  </Route>
      <Route path="/Signup"> <Signup/>  </Route>
      <Route   path="/Employees">  <Employees />  </Route>
      </Switch>
      </Router>


      </div>



  );
}

export default App;
