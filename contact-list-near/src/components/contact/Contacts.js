/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import CreateContact from "./CreateContact";
//import Contact from "./Contact";
import Loader from "../utils/Loader";
import { Button, Table } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import { getContacts as getContactList, createContact, deleteContact} from "../../utils/contacts"

const Contacts = ()=> {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllContact = useCallback(async ()=> {
        try {
            setLoading(true);
            setContacts( await getContactList());
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    });

    const addContact = async (data) =>{
        try {
            setLoading(true);
            createContact(data).then( (response)=> {
                getAllContact();
            });
            toast(<NotificationSuccess text="Contact added successfully. "/>);
        } catch (error) {
            console.log(error);
            toast(<NotificationError text="Failed to create contact."/>);
        } finally{
            setLoading(false)
        }
    };

    const deleteContactById = async (id) => {
        try {
            setLoading(true);
            await deleteContact(id).then((response) => getAllContact());   
            toast(<NotificationSuccess text="Contact deleted."/>);
        } catch (error) {
            console.log(error);
            toast(<NotificationError text="Failed to delete contact."/>);
        }finally {
            setLoading(false)
        }

    }

    useEffect( ()=> {
        getAllContact();
    }, []);

    return (
        <>
            {!loading ?
            <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>Contact List</h3>
                    <CreateContact save={addContact} />
                </div>
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
                                {contacts.map( (contact, indx) => (
                                    <tr key={indx}>
                                        <td>{indx + 1}</td>
                                        <td>{contact.firstName}</td>
                                        <td>{contact.lastName}</td>
                                        <td>{contact.telephone}</td>
                                        <td>{contact.email}</td>
                                        <td>
                                            <Button
                                                variant="outline-dark"
                                                className="rounded-pill px-3 mt-3"
                                                onClick={deleteContactById}
                                            >Delete</Button>
                                        </td>
                                </tr>
                                ))}
                                
                        </tbody>
                    </Table>
            </>
            : <Loader />

            }
        </>
    );
};
export  {Contacts};