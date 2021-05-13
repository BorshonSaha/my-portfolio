import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
        <Router> 
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/blogs">
              <Blog></Blog>
            </Route>
            <Route path="/aboutMe">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/contact">
              <ContactMe></ContactMe>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
