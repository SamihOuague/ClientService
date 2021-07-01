import React, { Component } from "react";
import { Navbar, Nav, Container, Button, Carousel, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addProduct, deleteProduct, showForm } from "../redux/features/product";
import { addToBask, showBask, hideBask } from "../redux/features/panier";

class Home extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.price = "";
        this.describ = "";
    }

    render() {
        return (
            <div style={{backgroundImage: "url('bg3.jpg')", backgroundSize: "cover"}}>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">E-COM WEBSITE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" bg="dark">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#shop">SHOP</Nav.Link>
                            <Nav.Link href="#blog">BLOG</Nav.Link>
                            <Nav.Link href="#about">ABOUT US</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                        </Nav>
                        {/*(this.props.product.fshow) ?
                            <Form inline>
                                <FormControl type="text" placeholder="Title" onChange={(e) => this.title = e.target.value} className="mr-sm-2" />
                                <FormControl type="number" placeholder="Price" onChange={(e) => this.price = e.target.value} className="mr-sm-2" />
                                <FormControl type="text" placeholder="Description" onChange={(e) => this.describ = e.target.value} className="mr-sm-2" />
                                <Button variant="outline-success" onClick={() => this.props.addProduct({title: this.title, price: this.price, describ: this.describ})}>Add</Button>
                                <Button variant="outline-danger" style={{ margin: "0px 5px"}} onClick={() => this.props.showForm()}>Close</Button>
                            </Form> :
                            <>
                                <Button style={{ marginRight: "10px" }} onClick={() => this.props.showForm()}>Show</Button>
                                <Button variant="success" onClick={() => this.props.showBask()}>Panier</Button>
                            </>
                        */}
                    </Navbar.Collapse>
                </Navbar>
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
                <Container style={{display: "flex", alignItems: "center", minHeight: "500px", marginTop: "25px", flexWrap: "wrap"}}>
                    <div style={{fontFamily: "Montserrat", flex: "3", marginRight: "10px", marginBottom: "15px"}}>
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
                <div>

                </div>
                <Container className="text-light" style={{ backgroundColor: "black", fontFamily: "Montserrat", paddingTop: "25px", marginTop: "25px"}} fluid>
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
                            <p><span style={{marginRight: "15px"}}>-</span> Terms & Condistions</p>
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
                {/*<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
                    {this.props.product.products.map((value, key) => (
                        <Card key={key} style={{minWidth: "18rem", margin: "15px"}}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>{value.describ}</Card.Text>
                                <Card.Subtitle>{value.price}$</Card.Subtitle>
                                <br/>
                                <Button onClick={() => { this.props.addToBask(value) }}>+</Button>
                            </Card.Body>
                        </Card>
                    ))}
                    <Modal show={this.props.panier.showB} onHide={() => this.props.hideBask()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Panier</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {(this.props.panier.basket.length) ? this.props.panier.basket.map((value, key) => (
                                <Card key={key} style={{minWidth: "18rem", margin: "15px"}}>
                                    <Card.Body>
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Subtitle>{value.price}$</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            )) :
                            <p style={{fontSize: "20px"}}>Aucun produit</p>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.props.hideBask()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => this.props.hideBask()}>
                                Payer
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>*/}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProp = {
    addProduct,
    deleteProduct,
    showForm,
    addToBask,
    showBask,
    hideBask
}

export default connect(mapStateToProps, mapDispatchToProp)(Home);