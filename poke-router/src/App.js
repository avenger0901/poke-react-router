import React from 'react';
import './App.css';
import Home from './Home';
import { 
  Route, 
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Paging from './Paging';

function App() {
  return (
    <Router>
      <div className="App">
        <header>Hi,search my pokemon here!</header>
          {/* <Link to="/">Go home </Link> */}
            <Route component={Home}/>
            <Route component={Paging}></Route>

    </div>
    </Router>
  );
}

export default App;
