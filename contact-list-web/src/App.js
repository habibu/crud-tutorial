/* eslint-disable-next-line */
import React, {useCallback, useEffect, useState } from "react";
import "./App.css";
import { getContacts } from "./utils/contacts";
import { login } from "./utils/near";
import Button from "react-bootstrap/Button";

function App(){
  const account = window.walletConnection.account();
  const [ contacts, setContacts] = useState([]);
  const fetchContacts = useCallback( async ()=> {
    if (account.accountId) {
      setContacts(await getContacts());
    }
  }, []);
  useEffect( ()=> {
    fetchContacts();
  }, []);

  return(
    <>
      { account.accountId ? (
        contacts.forEach((contact)=> console.log(contact))
      ): (
        <Button onClick={login}>CONNECT WALLET</Button>
      )}
    </>
  )
}

export default App;