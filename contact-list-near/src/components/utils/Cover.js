import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Cover = ({ name, login }) => {
    if ((name, login )){
        return (
            <div 
                className="d-flex justify-content-center flex-column text-center"
                style={{ background:"#b2b2b2", minHeight:"100vh"}}
                >
                <div className="mt-auto mb-5">
                    <h2>Nearest Contact List</h2>
                   <h3>Please connect your wallet to start</h3>
                    <Button 
                        onClick={login}
                        variant="outline-light"
                        className="rounded-pill px-3 mt-3"
                        >
                        Connect Wallet
                    </Button>
                </div>
            </div>
        );
    }
    return null;
};
Cover.propTypes = {
    name:PropTypes.string,
};
Cover.defaultProps = {
    name: ""
};

export default Cover;
