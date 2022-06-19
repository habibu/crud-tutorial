import { v4 as uuid4 } from "uuid";

export function createContact(contact) {
    contact.id = uuid4();
    return window.contract.setContact({contact});

}

export function getContacts(){
    return window.contract.getContacts();
}

export function getContact(id){
    return window.contract.getContacts(id);
}


export function deleteContact(id){
    id = uuid4();
    return window.contract.deleteContact(id);
}

export function updateContact(id, contact) {
    return window.contract.updateContact(id, contact);
}