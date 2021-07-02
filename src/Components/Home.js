import React, { Component } from "react";
import { Container, Button, Carousel } from "react-bootstrap";


class Home extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url('bg3.jpg')", backgroundAttachment: "fixed"}}>
                <Carousel>
                    <Carousel.Item>
                        <div style={{backgroundImage: "url('bg2.png')", backgroundSize: "cover", height: "500px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div style={{color: "white", fontFamily: "Montserrat"}}>
                                <h1>ZBEUB ZBEUB</h1>
                                <p style={{fontSize: "18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                <br/>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s !</p>
                                <Button variant="outline-light" size="lg">PLUS DE ZBEUB</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{backgroundImage: "url('bg1.png')", backgroundSize: "100%", height: "500px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div style={{color: "white", fontFamily: "Montserrat"}}>
                                <h1>CREATEUR DE SITE</h1>
                                <p style={{fontSize: "18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                <br/>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s !</p>
                                <Button variant="outline-light" size="lg">PLUS D'INFOS</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <Container className="bg-light" style={{display: "flex", alignItems: "center", minHeight: "500px", flexWrap: "wrap", paddingBottom: "25px"}} fluid>
                    <div style={{fontFamily: "Montserrat", flex: "3", marginRight: "15px", marginBottom: "15px"}}>
                        <h2 style={{padding: "15px 0px"}}>HOW DO YOU THINK YOU ARE ?</h2>
                        
                        <p style={{fontSize: "18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s !
                        when an unknown printer took a galley of type and scrambled it to make.
                        It has survived not only five centuries, but also the leap into electronic
                        remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                        <br/>
                        <Button variant="outline-dark" size="lg">NO ZBOUB</Button>
                    </div>
                    <div style={{fontFamily: "Montserrat", flex: "2", minWidth: "300px"}}>
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
                    <div style={{fontFamily: "Montserrat", flex: "2", minWidth: "300px"}}>
                        <img src="image1.jpeg" alt="computer img" width="100%"/>
                    </div>
                    <div style={{fontFamily: "Montserrat", flex: "3", marginLeft: "15px", marginBottom: "15px"}}>
                        <h2 style={{padding: "15px 0px"}}>WHAT DO YOU THINK ABOUT ZBOUB ?</h2>
                        
                        <p style={{fontSize: "18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s !
                        when an unknown printer took a galley of type and scrambled it to make.
                        It has survived not only five centuries, but also the leap into electronic
                        remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                        <br/>
                        <Button variant="outline-dark" size="lg">NIK MOK</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;