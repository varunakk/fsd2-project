import './App.css';
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        
        <Switch>
          <Route exact path ="/"><Home/></Route>
          <Route path ="/login"><Login/></Route>
          
        </Switch>
      </Router>
    </div>
  );
}
export default App;
