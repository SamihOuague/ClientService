import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <>
                <div style={{ fontFamily: "Montserrat", width: "100%", height: "350px", backgroundImage: "url('bg3.jpg')", backgroundSize: "cover" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", background: "linear-gradient(rgba(0,0,0,0), white)" }}>
                        <h1 className="text-dark">CONTACT US</h1>
                    </div>
                </div>
                <Container style={{ backgroundColor: "white", display: "flex", justifyContent: "center", fontFamily: "Montserrat" }} fluid>
                    <Form style={{width: "500px", margin: "50px 0"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Lastname & Firstname</Form.Label>
                            <Form.Control type="text" placeholder="LASTNAME Firtname" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="tel" placeholder="07 02 03 04 05" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message here"/>
                        </Form.Group>
                        <Button variant="outline-dark">Send</Button>
                    </Form>
                </Container>
            </>
        );
    }
}

export default Contact;