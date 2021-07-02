import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                        <Navbar.Brand href="#home">E-COM WEBSITE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" bg="dark">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">HOME</Link>
                                <Link className="nav-link" to="/shop">SHOP</Link>
                                <Link className="nav-link" to="/blog">BLOG</Link>
                                <Link className="nav-link" to="/about">ABOUT US</Link>
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/shop">
                            <Shop/>
                        </Route>
                        <Route exact path="/blog">
                            <Blog/>
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
                                <h5 style={{padding: "15px 0px"}}>ABOUT US</h5>

                                <p>1234 Lorem ipsum dolor, 07777</p>
                                <p>xyz@demothemes.com</p>
                                <p>+1000 0000 000</p>
                            </Col>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>USEFUL LINK</h5>

                                <p><span style={{marginRight: "15px"}}>-</span> About us</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Contact us</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Our blog</p>
                            </Col>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>INFORMATIONS</h5>

                                <p><span style={{marginRight: "15px"}}>-</span> FAQ</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Terms & Conditions</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Privacy policy</p>
                            </Col>
                            <Col lg={3} style={{paddingLeft: "50px"}}>
                                <h5 style={{padding: "15px 0px"}}>WORKING HOURS</h5>

                                <p><span style={{marginRight: "15px"}}>-</span> Mon – Thurs: 10:00 AM – 8:00 PM</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Thurs – Fri: 10:00 AM – 7:00 PM</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Saturday: 12:00 PM – 05:30 PM</p>
                                <p><span style={{marginRight: "15px"}}>-</span> Sunday: CLOSED</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default MyRouter;