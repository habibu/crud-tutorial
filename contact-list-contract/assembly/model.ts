// // contract/assembly/model.ts
// import { PersistentUnorderedMap, math } from "near-sdk-as";

// export const contacts = new PersistentUnorderedMap<u32, Contact>("contacts");

// @nearBindgen
// export class PartialContact {
//   email: string;
//   done: bool;
// }

// @nearBindgen
// export class Contact {
//   id: u32;
//   firstName: string;
//   lastName: string;
//   telephone: string;
//   email: string;
//   done: bool;

//   constructor(firstName: string,lastName: string,
//               telephone: string, email: string) {
//     this.id = math.hash32<string>(firstName);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.telephone = telephone;
//     this.done = false;
//   }

//   static insert(firstName: string,lastName: string,
//     telephone: string, email: string): Contact {
//     // create a new contact
//     const contact = new Contact(firstName,lastName,telephone,email);

//     // add the contact to the PersistentUnorderedMap
//     // where the key is the contact's id and the value
//     // is the contact itself. Think of this like an
//     // INSERT statement in SQL.
//     contacts.set(contact.id, contact);

//     return contact;
//   }

//   static findById(id: u32): Contact {
//     // Lookup a contact in the PersistentUnorderedMap by its id.
//     // This is like a SELECT * FROM contacts WHERE id=?
//     return contacts.getSome(id);
//   }

//   static find(offset: u32, limit: u32): Contact[] {
//     // the PersistentUnorderedMap values method will
//     // takes two parameters: start and end. we'll start
//     // at the offset (skipping all contacts before the offset)
//     // and collect all contacts until we reach the offset + limit
//     // contact. For example, if offset is 10 and limit is 3 then
//     // this would return the 10th, 11th, and 12th contact.
//     return contacts.values(offset, offset + limit);
//   }

//   static findByIdAndUpdate(id: u32, partial: PartialContact): Contact {
//     // find a contact by its id
//     const contact = this.findById(id);

//     // update the contact in-memory
//     contact.email = partial.email;
//     contact.done = partial.done;

//     // persist the updated contact
//     contacts.set(id, contact);

//     return contact;
//   }

//   static findByIdAndDelete(id: u32): void {
//     contacts.delete(id);
//   }

// }

import { PersistentUnorderedMap, u128, context, PersistentMap } from "near-sdk-as";

@nearBindgen
export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  owner: string;

  public static fromPayload(payload: Contact): Contact {
    const contact = new Contact();

    contact.id = payload.id;
    contact.firstName = payload.firstName;
    contact.lastName = payload.lastName;
    contact.telephone = payload.telephone;
    contact.email = payload.email;
    contact.owner = context.sender;

    return contact;
  }
  
}

export const contactsList = new PersistentUnorderedMap<string, Contact>("CONTACTS_LIST");