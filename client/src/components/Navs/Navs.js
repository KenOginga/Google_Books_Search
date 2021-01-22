import React from "react";
// import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2196f3" }, { marginBottom: "10px" }}>
            <a className="navbar-brand" to="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" to="/">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" to="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;