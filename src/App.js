import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';

import Scrollbars from './utils/scroll'
import ErrorPage from './utils/404'

import Maths from './components/math/'
import Content from './components/content'

class MathPage extends React.Component{
  render(){
    return (
      <Content>
        <Maths type='Heat Map'/>
        <Maths type='Bar Chart'/>
        <Maths type='Bump Chart'/>
        <Maths type='Chord'/>
      </Content>
    )
  }
}

class HomePage extends React.Component{
  render(){
    return (
      <Content>
        <h1>HomePage</h1>
      </Content>
    )
  }
}

class About extends React.Component{
  render(){
    return (
      <Content>
        <h1>About</h1>
      </Content>
    )
  }
}


class AppContent extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt="Logo"
                src={require("./assets/logo.svg")}
                width="25"
                height="25"
                className="d-inline-block align-top"
            />
            {'  RenShi'}
            </Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/maths">
                <Nav.Link>Maths</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder=" Type here ...  " className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <Scrollbars autoHide autoHeight autoHeightMin={`calc(100vh - 56px)`}>
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/maths" component={MathPage} />
            <Route path="/about" component={About} />
            <Route component={ErrorPage} />
            </Switch>
          </Scrollbars>
        </Router>
      </div>
    )
  }
}

export default AppContent;
