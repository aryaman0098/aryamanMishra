import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import RecentProjects from "./components/RecentProjects.js"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path = "/" exact component = {Home} />
        </Switch>
        <Switch>
          <Route path = "/about" exact component = {About} />
        </Switch>
        <Switch>
          <Route path = "/recentProjects" exact component = {RecentProjects} />
        </Switch>
      </Router>
      <Footer className = "footer_tag"/>
    </div>
  );
}

export default App;
