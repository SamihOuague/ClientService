import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar style={{fontFamily: "Montserrat"}} bg="dark" variant="dark" expand="lg" fixed="top">
                        <Navbar.Brand href="/">WW-WAG</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" bg="dark">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">HOME</Link>
                                <Link className="nav-link" to="/services">SERVICES</Link>
                                <Link className="nav-link" to="/about">A PROPOS</Link>
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/services">
                            <Service/>
                        </Route>
                        <Route exact path="/about">
                            <About/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                    <Container className="text-light" style={{ backgroundColor: "black", fontFamily: "Montserrat", paddingTop: "25px"}} fluid>
                        <Row>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>A PROPOS</h5>

                                <p>29 Rue D'Alger, 59110</p>
                                <p>contact@ww-wag.com</p>
                                <p>+33 767 37 59 92</p>
                            </Col>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>LIENS UTILE</h5>

                                <p><span style={{marginRight: "15px"}}>-</span> <Link className="text-light" style={{ textDecoration: "none" }} to="/about">A Propos</Link></p>
                                <p><span style={{marginRight: "15px"}}>-</span> <Link className="text-light" style={{ textDecoration: "none" }} to="/services">Nos Services</Link></p>
                                <p><span style={{marginRight: "15px"}}>-</span> <Link className="text-light" style={{ textDecoration: "none" }} to="/contact">Contactez-Nous</Link></p>
                            </Col>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>INFORMATIONS</h5>

                                <p><span style={{marginRight: "15px"}}>-</span> <Link className="text-light" style={{ textDecoration: "none" }} to="/">FAQ</Link></p>
                                <p><span style={{marginRight: "15px"}}>-</span> <Link className="text-light" style={{ textDecoration: "none" }} to="/">Terms & Conditions</Link></p>
                                <p><span style={{marginRight: "15px"}}>-</span> <Link className="text-light" style={{ textDecoration: "none" }} to="/">Privacy policy</Link></p>
                            </Col>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>DISPONIBILITE</h5>

                                <p><span style={{marginRight: "15px"}}>-</span> Lun. – Mer.: 10:00 AM – 8:00 PM</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Jeu. – Ven.: 10:00 AM – 7:00 PM</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Samedi : 12:00 PM – 05:30 PM</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Dimanche : CLOSED</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default MyRouter;