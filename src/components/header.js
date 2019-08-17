import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';

export default class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt="Logo"
                    src={require("./../assets/logo.svg")}
                    width="25"
                    height="25"
                    className="d-inline-block align-top"
                />
                {'  RenShi'}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Maths</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder=" Type here ...  " className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}