import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ()=> (
    <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status" className="opacity-25">
            <span>Loading...</span>
        </Spinner>
    </div>
);

export default Loader;