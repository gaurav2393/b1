import React from "react";
import { Link } from "react-router-dom";

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
export default Book;