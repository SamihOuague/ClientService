import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, deleteProduct, showForm } from "../redux/features/product";
import { addToBask, showBask, hideBask } from "../redux/features/panier";
import { Container, Card, Button, Modal, Form } from "react-bootstrap";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.price = "";
        this.describ = "";
    }

    addProduct() {
        const { title, price, describ } = this;
        this.props.addProduct({title, price, describ});
        this.props.showForm();
    }

    render() {
        return (
            <Container style={{ marginTop: "50px", minHeight: "500px", paddingTop: "25px" }}>
                <Button variant="outline-success" onClick={() => this.props.showForm()}>ADD</Button>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {this.props.product.products.map((value, key) => (
                        <Card key={key} style={{width: "18rem", margin: "15px"}}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>{value.describ.substr(0, 50)}...</Card.Text>
                                <Card.Subtitle>{value.price}$</Card.Subtitle>
                                <br/>
                                <Button onClick={() => { this.props.addToBask(value) }}>+</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
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
                <Modal show={this.props.product.fshow} onHide={() => this.props.showForm()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un produit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Titre</Form.Label>
                                <Form.Control onChange={ (e) => this.title = e.target.value } type="text" placeholder="Titre du produit" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Prix</Form.Label>
                                <Form.Control onChange={ (e) => this.price = e.target.value } type="number" step="0.01" placeholder="Prix du produit" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange={ (e) => this.describ = e.target.value } as="textarea" row={3} placeholder="Description du produit" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.showForm()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.addProduct()}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProp)(Shop);