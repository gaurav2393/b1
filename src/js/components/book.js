import React from "react";
const Book = (props) => {
    return (
        <li>
            <a href={`/bookDetail/${props.listItem.id}`}>                
                <div>
                    <img src={props.listItem.img} alt="book"/>
                </div>
                <h2>{props.listItem.name}</h2>
            </a>
        </li>
    );
};
export default Book;