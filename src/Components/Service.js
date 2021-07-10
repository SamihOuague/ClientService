import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, deleteProduct, showForm } from "../redux/features/product";
import { addToBask, showBask, hideBask } from "../redux/features/panier";
import { Container, Button } from "react-bootstrap";

class Service extends Component {
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
            <>
                <div style={{ fontFamily: "Montserrat", width: "100%", height: "350px", backgroundImage: "url('bg3.jpg')", backgroundSize: "cover" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", background: "linear-gradient(rgba(0,0,0,0), white)" }}>
                        <h1 className="text-dark">SERVICES</h1>
                    </div>
                </div>
                <Container style={{ marginTop: "50px", minHeight: "500px", fontFamily: "Montserrat" }}>
                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                        <div className="border border-muted shadow-lg" style={{ width: "320px", margin: "10px", borderRadius: "50px", padding: "25px 0" }}>
                            <h2 className="text-center" style={{ height: "100px" }}>Site Vitrine</h2>
                            <ul style={{fontSize: "20px", margin: "15px"}}>
                                <li className="text-dark">Page de presentation avec carousel</li>
                                <li className="text-dark">Pop-up newsletter & prospection</li>
                                <li className="text-dark">Email professionnel</li>
                                <li className="text-dark">Page contact avec CRM</li>
                            </ul>
                            <div className="d-flex justify-content-center" style={{ margin: "50px 0" }}>
                                <Button size="lg" variant="outline-success">En Savoir Plus</Button>
                            </div>
                        </div>
                        <div className="border border-muted shadow-lg" style={{ width: "320px", margin: "10px", borderRadius: "50px", padding: "25px 0" }}>
                            <h2 className="text-center" style={{ height: "100px" }}>Site Dynamique</h2>
                            <ul style={{fontSize: "20px", margin: "15px"}}>
                                <li className="text-dark">Page de presentation avec carousel</li>
                                <li className="text-dark">Pop-up newsletter & prospection</li>
                                <li className="text-dark">Email professionnel</li>
                                <li className="text-dark">Page contact avec CRM</li>
                            </ul>
                            <div className="d-flex justify-content-center" style={{ margin: "50px 0" }}>
                                <Button size="lg" variant="outline-success">En Savoir Plus</Button>
                            </div>
                        </div>
                        <div className="border border-muted shadow-lg" style={{ width: "320px", margin: "10px", borderRadius: "50px", padding: "25px 0" }}>
                            <h2 className="text-center" style={{ height: "100px" }}>Application Personnalise</h2>
                            <ul style={{fontSize: "20px", margin: "15px"}}>
                                <li className="text-dark">Page de presentation avec carousel</li>
                                <li className="text-dark">Pop-up newsletter & prospection</li>
                                <li className="text-dark">Email professionnel</li>
                                <li className="text-dark">Page contact avec CRM</li>
                            </ul>
                            <div className="d-flex justify-content-center" style={{ margin: "50px 0" }}>
                                <Button size="lg" variant="outline-success">En Savoir Plus</Button>
                            </div>
                        </div>
                    </div>
                    {/*<Button variant="outline-success" onClick={() => this.props.showForm()}>ADD</Button>
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
                    </Modal>*/}
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
    showForm,
    addToBask,
    showBask,
    hideBask
}

export default connect(mapStateToProps, mapDispatchToProp)(Service);