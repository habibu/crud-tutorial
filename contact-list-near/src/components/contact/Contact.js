import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack, Table } from "react-bootstrap";

const Contact = ({contact, deleteCont})=>{

    const {id, firstName, lastName, telephone, email, owner } = contact;

    const triggerDelete = ()=> { deleteCont(id); };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>S/No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Numer</th>
                    <th>Email</th>
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
                    <td>
                    <Button 
                        variant="outline-dark"
                        onClick={triggerDelete}
                        className="w-100 py-3"
                    >
                        Delete
                    </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};
Contact.protoTypes = {
    contact: PropTypes.instanceOf(Object).isRequired,
    deleteCont: PropTypes.func.isRequired
};
export default Contact;