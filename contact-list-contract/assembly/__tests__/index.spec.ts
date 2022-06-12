// contract/assembly/__tests__/index.spec.ts

import { create, getById, get, update, del } from "../index";
import { Contact, contacts } from "../model";

describe("contract methods", () => {
  it("creates a contact", () => {
    // call the create method
    const contact = create("Sam", "Sympson", "123","test@te.com");

    // lookup in the PersistentUnorderedMap for our contact
    // expect the persisted contact to equal the contact returned
    // by the create method above.
    expect(contacts.getSome(contact.id)).toStrictEqual(contact);
  });

  it("gets a contact by id", () => {
    // create three contacts
    const a = Contact.insert("Sam", "Sympson", "123","test@te.com");
    const b = Contact.insert("Sam2", "Sympson2", "1234","test2@te.com");
    const c = Contact.insert("Sam3", "Sympson3", "1235","test3@te.com");

    // get each contact by its it
    expect(getById(a.id)).toStrictEqual(a);
    expect(getById(b.id)).toStrictEqual(b);
    expect(getById(c.id)).toStrictEqual(c);
  });

  it('gets a list of contact', () => {
    const contacts = new Array<number>(100)
      .fill(0)
      .map<Contact>((_, i) => Contact.insert('contact' + i.toString(),
                                            'contact2' + i.toString(),
                                            'contact3' + i.toString(),
                                            'contact4' + i.toString(),
                                            ))

    expect(get(20)).toStrictEqual(contacts.slice(20, 30));
    expect(get(0, 10)).toStrictEqual(contacts.slice(0, 10));
    expect(get(10, 10)).toStrictEqual(contacts.slice(10, 20));
    expect(get(50, 50)).toStrictEqual(contacts.slice(50, 100));
  });

  it('updates a contact', () => {
    const contact = Contact.insert("Sam", "Sympson", "123","test@te.com");

    update(contact.id, { email:'test@gm.com' ,done: true });

    const contactAfterUpdate = Contact.findById(contact.id);

    expect(contactAfterUpdate.id).toStrictEqual(contact.id);
    expect(contactAfterUpdate.email).toStrictEqual('test@gm.com');
    expect(contactAfterUpdate.done).toStrictEqual(true);
  });

  itThrows('deletes a contact', () => {
    const contact = Contact.insert("Sam", "Sympson", "123","test@te.com");

    del(contact.id);

    Contact.findById(contact.id);
  });

});
