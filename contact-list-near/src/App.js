/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable-next-line */
import React, {useCallback, useEffect, useState } from "react";
import "./App.css";
//import { getContacts } from "./utils/contacts";
import { login, logout as destroy, accountBalance} from "./utils/near";
import Wallet from "./components/Wallet";
import { Notification } from "./components/utils/Notifications";
import { Contacts } from "./components/contact/Contacts";
import Cover from "./components/utils/Cover";
import {Container, Nav } from "react-bootstrap";


const App = function AppWrapper(){
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");

  
  const getAccountBalance = useCallback( async ()=> {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });
  useEffect( ()=> {
    getAccountBalance();
  }, [getAccountBalance]);

  return(
    <>
   
      < Notification />
      {account.accountId ? 
       <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet 
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main>
            <Contacts /> 
          </main>
       </Container>
        :
          <Cover name="Contact List" login={login}>CONNECT WALLET</Cover>
      }
    </>
  )
}

export default App;