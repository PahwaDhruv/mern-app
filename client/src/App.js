import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './utilities/header/Header';
import Footer from './utilities/footer/Footer';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import NoMatch from './utilities/noMatch/NoMatch';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
