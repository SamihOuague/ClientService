import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url('bg3.jpg')", backgroundAttachment: "fixed"}}>
                <Carousel>
                    <Carousel.Item>
                        <div style={{backgroundImage: "url('bg2.png')", backgroundSize: "cover", height: "500px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div style={{color: "white", fontFamily: "Montserrat"}}>
                                <h1>CREATION DE SITE WEB</h1>
                                <p style={{fontSize: "18px"}}>Site vitrine, portfolio, landing page, blog, e-commerce ... 
                                <br/>Nous realisons tout type de projet en fonction de VOS besoins !</p>
                                <Link className="btn btn-outline-light" to="/services">PLUS D'INFOS</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{backgroundImage: "url('bg1.png')", backgroundSize: "100%", height: "500px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div style={{color: "white", fontFamily: "Montserrat"}}>
                                <h1>DEVELOPPEMENT D'APPLICATION MOBILE</h1>
                                <p style={{fontSize: "18px"}}>Dans un monde ou les smartphones deviennent indispensables a chacun, 
                                <br/>Posseder votre application mobile devient un atout majeur au developpement de votre entreprise !</p>
                                <Link className="btn btn-outline-light" to="/services">PLUS D'INFOS</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <Container className="bg-light" style={{display: "flex", alignItems: "center", minHeight: "500px", flexWrap: "wrap", paddingBottom: "25px"}} fluid>
                    <div style={{fontFamily: "Montserrat", flex: "3", marginRight: "15px", marginBottom: "15px"}}>
                        <h2 style={{padding: "15px 0px"}}>QUI SOMMES NOUS ?</h2>
                        
                        <p style={{fontSize: "18px"}}>Nous sommes une agence specialiser dans l'integration et developpement d'application & site web,
                        responsive, efficace, rapide et professionnel.
                        </p>
                        <br/>
                        <Link className="btn btn-outline-dark" to="/about">VOIR PLUS</Link>
                    </div>
                    <div className="border-muted shadow-lg" style={{fontFamily: "Montserrat", flex: "2", minWidth: "300px"}}>
                        <img src="computer.jpeg" alt="computer img" width="100%"/>
                    </div>
                </Container>
                <div style={{height: "250px", display: "flex", fontFamily: "Montserrat", alignItems: "center", justifyContent: "space-around", fontSize: "24px", flexWrap: "wrap"}}>
                    <div className="btn btn-outline-warning btn-lg" style={{padding: "10px", borderRadius: "50px" }}>
                        REACT.JS
                    </div>
                    <div className="btn btn-outline-light btn-lg" style={{padding: "10px", borderRadius: "50px"}}>
                        NODE.JS
                    </div>
                    <div className="btn btn-outline-success btn-lg" style={{padding: "10px", borderRadius: "50px"}}>
                        SYMFONY
                    </div>
                    <div className="btn btn-outline-danger btn-lg" style={{padding: "10px", borderRadius: "50px"}}>
                        MONGODB
                    </div>
                    <div className="btn btn-outline-primary btn-lg" style={{padding: "10px", borderRadius: "50px"}}>
                        MYSQL
                    </div>
                </div>
                <Container className="bg-light" style={{display: "flex", alignItems: "center", minHeight: "500px", flexWrap: "wrap", paddingTop: "25px"}} fluid>
                    <div className="border-muted shadow-lg" style={{fontFamily: "Montserrat", flex: "2", minWidth: "300px"}}>
                        <img src="image1.jpeg" alt="computer img" width="100%"/>
                    </div>
                    <div style={{fontFamily: "Montserrat", flex: "3", marginLeft: "15px", marginBottom: "15px"}}>
                        <h2 style={{padding: "15px 0px"}}>POURQUOI NOUS CHOISIR NOUS ?</h2>
                        
                        <p style={{fontSize: "18px"}}>Nous faisons le choix d'ecrire le code par nos soins pour vous assurer un service de qualite.
                        En effet, malgres le coter pratique d'un CMS tel que WordPress ou Shopify, ces dernier sont lourd et gourmand en ressources,
                        L'avantage des technologies tel que React JS/Native, Symfony ou NodeJS est que ce sont des outils tres efficaces et reactif
                        qui assurent une navigation fluide et agreable.</p>
                        <br/>
                        <Link to="/services">VOIR PLUS</Link>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;