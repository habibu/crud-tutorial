import { Contact, contactsList } from "./model";


export function setContact(contact: Contact): void {
  let storedContact = contactsList.get(contact.id);
  
  if (storedContact !== null) {
    throw new Error(`A contact with ${contact.id} already exist`);
  }

  contactsList.set(contact.id, Contact.fromPayload(contact));
}

export function getContact(id: string): Contact | null {
  return contactsList.get(id);
}
export function getContacts(): Contact[]{
  return contactsList.values();
}

export function updateContact(id:string, contact: Contact): void {
  let storedContactByID = contactsList.get(id);
  
  if (storedContactByID !== null){
    contactsList.set(contact.id, Contact.fromPayload(contact));
  }else{
    throw new Error(`A contact with ${contact.id} already exist`);
  }
}

export function deleteContract(id:string): void {
  
  let storedContact = contactsList.get(id);
  if(storedContact !== null ){
    contactsList.delete(id);
  }else {
    throw new Error(`A contact does not exist`);
  }
}

