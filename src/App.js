import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NoMatch } from './pages/NoMatch';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/catalog" component={Catalog} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
