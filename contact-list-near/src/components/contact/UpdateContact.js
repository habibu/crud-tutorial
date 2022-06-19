/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { getContact as getContactByID } from "../../utils/contacts";


const UpdateContact = ({ update }) => {
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ telephone, setTelephone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [contacts, setContacts] = useState([]);
    const isFormFilled = ()=> firstName && lastName && telephone && email;
    const [show, setShow ] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true);

    const getContactById = useCallback(async (id)=> {
        try {
            setLoading(true);
            setContacts( await getContactByID(id));
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }, []);

   
    useEffect( ()=> {
        getContactById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    
    return (
        <>
            <Button
                onClick={handleShow}
                variant="outline-dark"
                className="w-99 px-2"
                
            >
               Update Contact
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Contact</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        { 
                        <><FloatingLabel
                                controlId="inputFirstName"
                                label="Fist Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your first name"
                                    value={contacts.firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    } } />
                            </FloatingLabel><FloatingLabel
                                controlId="inputlastName"
                                label="Last Name"
                                className="mb-3"
                            >
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={contacts.lastName}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        } } />
                                </FloatingLabel><FloatingLabel
                                    controlId="inputTelephone"
                                    label="Phone Number"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="(+333) 3333 3333"
                                        value={contacts.telephone}
                                        onChange={(e) => {
                                            setTelephone(e.target.value);
                                        } } />
                                </FloatingLabel><FloatingLabel
                                    controlId="inputEmail"
                                    label="Email Address"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="your_email@email.com"
                                        value={contacts.email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        } } />
                                </FloatingLabel></>
                        }
                    </Modal.Body>
                </Form>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="outline-dark"
                            disabled={!isFormFilled()}
                            onClick={()=>{
                                update({
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
UpdateContact.propTypes = {
    update: PropTypes.func.isRequired
};

export default UpdateContact;