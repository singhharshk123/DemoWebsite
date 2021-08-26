import './App.css';
// import Navs from './components/Navbar/Navs';
import LogoDesign from './components/Navbar/LogoDesign';
import Home from './Home.js';
// import Products from "./Products";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Navbar } from "./components/Navbar/NavbarElements";


function App() {
  return (
    <div className="App">
     <Router>
      {/* <Navs /> */}
      <Switch>
      {/* <Route  path='/logo'  /> */}
        <Route exact path='/' component={Home} />
        {/* <Route path='/aboutus'  /> */}
        <Route path='/LogoDesign' component={LogoDesign} />
        {/* <Route path='/freelancers'  />
        <Route path='/blog'  />
        <Route path='/tutorials' />
        <Route path='/contactus'  />
        <Route path='/Log-in'  /> */}
      </Switch>
    </Router>

    </div>
  );
}

export default App;
