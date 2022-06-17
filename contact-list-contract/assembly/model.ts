import { PersistentUnorderedMap, context } from "near-sdk-as";

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