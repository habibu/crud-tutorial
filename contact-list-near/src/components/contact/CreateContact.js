import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const CreateContact = ({ save }) => {
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ telephone, setTelephone ] = useState("");
    const [ email, setEmail ] = useState("");
    const isFormFilled = ()=> firstName && lastName && telephone && email;
    const [show, setShow ] = useState(false);

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true);

    return (
        <>
            <Button
                onClick={handleShow}
                variant="outline-dark"
                className="w-99 px-2"
                
            >
               Add Contact
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Contact</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <FloatingLabel 
                            controlId="inputFirstName"
                            label="Fist Name"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text"
                                placeholder="Enter your first name"
                                onChange={ (e)=>{
                                    setFirstName(e.target.value);
                                }}
                                
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputlastName"
                            label="Last Name"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text"
                                placeholder="Enter your last name"
                                onChange={ (e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputTelephone"
                            label="Phone Number"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text"
                                placeholder="(+333) 3333 3333"
                                onChange={ (e)=>{
                                    setTelephone(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputEmail"
                            label="Email Address"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="email"
                                placeholder="your_email@email.com"
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                    </Modal.Body>
                </Form>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="outline-dark"
                            disabled={!isFormFilled()}
                            onClick={()=>{
                                save({
                                    firstName,
                                    lastName,
                                    telephone,
                                    email
                                });
                                handleClose();
                            }}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};
CreateContact.propTypes = {
    save: PropTypes.func.isRequired
};

export default CreateContact;