import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui attached header">
            <div className="ui header">
                <Link to="/">
                    <div className="ui center aligned header">
                        Contact Manager
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
