import React from "react";
import { Link } from 'react-router-dom';

function ErrorPage() {
    return(
        <div className="align-self-center mt-5">
            <h1>PAGE NOT FOUND</h1>
            <p>&nbsp;</p>
            <Link to="/" class="black-button">Back to home page</Link>
            <p></p>
        </div>
    )
}

export default ErrorPage;