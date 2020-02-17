import React from 'react';
import './App.css';
import Home from './Home';

import PokeDetail from './PokeDetail'
import { 
  Switch,
  Route, 
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">Hi,search my pokemon here!</header>
          {/* <Link to="/">Go home </Link> */}
          <Switch>
            <Route exact path = "/:pokemon?" component={Home}/>
            <Route path="/pokemon/:_id" component={PokeDetail} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
