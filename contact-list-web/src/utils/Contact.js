import { v4 as uuid4 } from "uuid";

export function createContact(contact) {
    contact.id = uuid4();
    return window.contract.setContact({contact});

}

export function getContacts(){
    return window.contract.getContacts()
}