import React, { Component } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addProduct, deleteProduct, showForm } from "../redux/features/product";

class Home extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.price = "";
        this.describ = "";
    }

    handleAdd = () => {
        this.props.addProduct({title: this.title, price: this.price, describ: this.describ}); 
    }

    render() {
        console.log(this.props.product.fshow);
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        {(this.props.product.fshow) ?
                            <Form inline>
                                <FormControl type="text" placeholder="Title" onChange={(e) => this.title = e.target.value} className="mr-sm-2" />
                                <FormControl type="number" placeholder="Price" onChange={(e) => this.price = e.target.value} className="mr-sm-2" />
                                <FormControl type="text" placeholder="Description" onChange={(e) => this.describ = e.target.value} className="mr-sm-2" />
                                <Button variant="outline-success" onClick={ this.handleAdd }>Add</Button>
                                <Button variant="outline-danger" style={{ margin: "0px 5px"}} onClick={() => this.props.showForm()}>Close</Button>
                            </Form> :
                            <Button onClick={() => this.props.showForm()}>Show</Button>
                        }
                    </Navbar.Collapse>
                </Navbar>
                <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
                    { this.props.product.products.map((value, key) => (
                        <Card key={key} style={{minWidth: "18rem", margin: "15px"}}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>{value.describ}</Card.Text>
                                <Card.Subtitle>{value.price}$</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProp = {
    addProduct,
    deleteProduct,
    showForm
}

export default connect(mapStateToProps, mapDispatchToProp)(Home);