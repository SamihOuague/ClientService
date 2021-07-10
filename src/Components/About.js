import React, { Component } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <>
                <div style={{ fontFamily: "Montserrat", width: "100%", height: "350px", backgroundImage: "url('bg3.jpg')", backgroundSize: "cover" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", background: "linear-gradient(rgba(0,0,0,0), white)" }}>
                        <h1 className="text-dark">ABOUT US</h1>
                    </div>
                </div>
                <div style={{backgroundImage: "url('bg3.jpg')", backgroundAttachment: "fixed"}}>
                    <Container style={{ fontFamily: "Montserrat", padding: "25px 0", backgroundColor: "white" }} fluid>
                        <h2 className="text-center">WHO WE ARE</h2>
                        <br/>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div style={{ display: "flex", justifyContent: "center", margin: "50px 50px" }}>
                            <div style={{width: "650px"}}>
                                <img src="https://i2.wp.com/blog.bureau24.fr/wp-content/uploads/2016/04/%5E30489FB65CAC68F232832A57F65F109B89065CF621F577A294%5Epimgpsh_fullsize_distr-e1466606075550.png?fit=1000%2C625&ssl=1" width="100%" alt="Reunion client"/>
                            </div>
                        </div>
                    </Container>
                    <div style={{ height: "250px" }}>

                    </div>
                    <Container style={{ fontFamily: "Montserrat", padding: "25px 0", backgroundColor: "white" }} fluid>
                        <h2 className="text-center">WHAT DO WE DO</h2>
                        <br/>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div style={{ display: "flex", justifyContent: "center", margin: "50px 50px" }}>
                            <div style={{width: "650px"}}>
                                <img src="http://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg" width="100%" alt="Reunion client"/>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default About;