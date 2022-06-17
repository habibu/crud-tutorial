import 'regenerator-runtime/runtime';
import React from 'react';
import PropTypes from 'prop-types';
import CreateContact from './components/CreateContact';
import ContactList from './components/ContactList';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";

const App = ({ contract, currentUser, nearConfig, wallet }) => {

  const signIn = () => {
    wallet.requestSignIn(
      nearConfig.contractName,
      'NEAR Guest Book'
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };
  
  return (
    <div 
    style={{ background: "#b2b2b2", minHeight: "100vh" }} >
      { currentUser
          ?  <Container fluid="md">
          <Row>
            <Col xs={6}>
            <h1>Welcome to NEAR Protocol Contact Registerer</h1>
              <h5>
                Your account ID: {currentUser.accountId}
                {" "}
                <Button onClick={signOut}
                        variant="outline-light"
                        className="rounded-pill px-3 mt-3">
                          Log out
                </Button>
              </h5>
              
              <CreateContact contract={contract} />
              <ContactList contract={contract} />
              </Col>
        </Row>
    </Container>
          : 
          <Container  className="d-flex justify-content-center flex-column text-center"
          style={{ background: "#b2b2b2", minHeight: "100vh" }} >
            <Row>
              <Col>
                <h1> Register your contacts in NEAR Protocol</h1>
                <h5>Connect your wallet to start</h5> 
                {" "}
                <Button onClick={signIn}
                        variant="outline-light"
                        className="rounded-pill px-3 mt-3"
                >
                          Connect
                </Button>
              </Col>
            </Row>
          </Container>
        }
    </div>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    create: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;