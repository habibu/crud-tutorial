/* eslint-disable react/prop-types */
// src/components/Contact.js
import React,  { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import ContactList from "./ContactList";

export function Contact({ contract, id, firstName,lastName, telephone, email,done }) {
  const [checked, setChecked] = useState(done);

  
  
  const complete = ({ target }) => {
    setChecked(target.checked);
    contract.update({ id, updates: { firstName, lastName, telephone, email,done: target.checked } });
  };

  const del = () => {
    // on clicking the delete button invoke the del method on
    // the smart contract
    contract.del({ id });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <ContactList></ContactList>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Telephone Number</th>
                <th>Email</th>
                <th>Selected</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{telephone}</td>
                <td>{email}</td>
                <td><input type="checkbox" checked={checked} onChange={complete} /></td>
                <td>
                    <Button onClick={del}
                            variant="outline-light"
                            className="rounded-pill px-3 mt-3">
                              Delete 
                    </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
