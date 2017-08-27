import React from "react";
import Book from "./book";
import _ from "lodash";
import PropTypes from "prop-types";

const BooksList=(props)=> {
	console.log("g",props);
    return (
        <ul>
            {_.map(props.items, (listItem, index) => {return <Book listItem={listItem} key={index} index={index} />;})}
        </ul>
    );
};

BooksList.PropTypes = {
	items: PropTypes.array
};
export default BooksList;