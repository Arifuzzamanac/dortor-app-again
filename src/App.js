import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/users">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
