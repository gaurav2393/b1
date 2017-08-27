import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = (props) => {
    return (
        <li>
            <Link to={`/bookDetail/${props.listItem.id}`}>                
                <div>
                    <img src={props.listItem.img} alt="book"/>
                </div>
                <h2>{props.listItem.name}</h2>
            </Link>
        </li>
    );
};

Book.PropTypes = {
    listItem: PropTypes.object.isRequired
};
export default Book;