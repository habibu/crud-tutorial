/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/CreateTodo.js
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";

const CreateContact = ({ contract }) => {
  const [firstName, lastName, telephone, email, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // invoke the smart contract's create method
    const contact = await contract.create({ firstName, lastName, telephone, email });
    //setTask(firstName | lastName | telephone | email);
    setLoading(false);

    // print the todo to the console

  };


    const [state, setState] = React.useState(
      {
        firstName: "",
        lastName: "",
        telephone: "",
        email: ""
      })
  

  function handleChange(evt) {
    const value = evt.target.value;
    setState(
      {
        ...state, [evt.target.name]: value
      });
  }

  return (
    <Container fluid="md">
      <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="firstName" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Surename</Form.Label>
            <Form.Control type="text" placeholder="Surename" name="lastName" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTelephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" placeholder="+333-333-3333" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
          </Form.Group>
        
            <Button  variant="outline-light"
                    className="rounded-pill px-3 mt-3"
                     type="submit" disabled={loading}>
                Create Contact
            </Button>
        </Form>
        </Col>
        </Row>
    </Container>
  );
}



export default CreateContact;
