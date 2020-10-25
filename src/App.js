import logo from './logo.svg';
import './App.css';
import Header from './components/header'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Header/>
      <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */
        }
      {/* </Switch>

      </Router> */} 
      
    
    </div>
  );
}

export default App;
