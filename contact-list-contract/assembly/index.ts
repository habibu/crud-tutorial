// // contract/assembly/index.ts
// import { Contact, PartialContact } from "./model";

// // export the create method. This acts like an endpoint
// // that we'll be able to call from our web app.
// export function create(firstName: string,lastName: string,
//   telephone: string, email: string): Contact {
//   // use the Contact class to persist the contact data
//   return Contact.insert(firstName,lastName,telephone, email);
// }

// export function getById(id: u32): Contact {
//   return Contact.findById(id);
// }

// export function get(offset: u32, limit: u32 = 10): Contact[] {
//   return Contact.find(offset, limit);
// }

// export function update(id: u32, updates: PartialContact): Contact {
//   return Contact.findByIdAndUpdate(id, updates);
// }

// export function del(id: u32): void {
//   Contact.findByIdAndDelete(id);
// }

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

export function deleteContact(id:string): void {
  contactsList.delete(id);
}

