import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Cover = ({ name, login, coverLogo }) => {
    if ((name, login, coverLogo)){
        return (
            <div 
                className="d-flex justify-content-center flex-column text-center"
                style={{ background:"#b2b2b2", minHeight:"100vh"}}
                >
                <div className="mt-5 mb-5">
                    <img src={coverLogo} alt="Nearest Logo"/>
                    <h5>Verified and Permanent Record made Easy...</h5>
                   <h3>Please connect your wallet to start</h3>
                    <Button 
                        onClick={login}
                        variant="outline-light"
                        className="rounded-pill px-3 mt-3"
                        >
                        Connect Wallet
                    </Button>
                </div>
                
                <p>Developed by Habibu (c) 2022 and Powered by NEAR</p>
               
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
