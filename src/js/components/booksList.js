import React from "react";
import Book from "./book";
import _ from "lodash";

const BooksList=(props)=> {
    return (
        <ul>
            {_.map(props.items, (listItem, index) => {return <Book listItem={listItem} key={index} index={index} />;})}
        </ul>
    );
};

export default BooksList;