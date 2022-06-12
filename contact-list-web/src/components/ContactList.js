/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// src/components/ContactList.js
import React, { useEffect, useState } from "react";
import { Contact } from "./Contact";

const PER_PAGE_LIMIT = 5;

const ContactList = ({ contract }) => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let offset; 
    if(page < 1) {
      setPage(1);
      offset = 0;
    } else {
      offset = (page - 1) * PER_PAGE_LIMIT;
    }

    // every second after the component first mounts
    // update the list of Contacts by invoking the get
    // method on the smart contract
    const id = setInterval(() => {
      console.log("Testing..",contract)
      contract
        .get({ offset, limit: PER_PAGE_LIMIT })
        .then((contacts) => setContacts(contacts));
    }, 1000);

    return () => clearInterval(id);
  }, [page, contract]);

  return (
    <>
    <ul>
      <div className="flex">
      Current Page: {page}
      </div>
      <button onClick={() => setPage((page) => page - 1)}>&lt;</button>
      {" "}
      <button onClick={() => setPage((page) => page + 1)}>&gt;</button>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contract={contract} {...Contact} />
        </li>
      ))}
    </ul>
    </>
  );
}

export default ContactList;
