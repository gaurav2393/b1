import { createSelector } from "reselect";
import { search } from "../common/common";
import _ from "lodash";

const getBooks = (state) => state.booksData;

const getSearchValue = (state, searchValue) => searchValue;

export const getBooksData = createSelector(
    [getBooks, getSearchValue], (books, searchValue) => {
        if(books) {
            return _.filter(books, (book) => {
                if(searchValue && search(searchValue.toUpperCase(), book["name"].toUpperCase())) {
                    return book;
                } else if(!searchValue) {
                    return book;
                }
            });
        }
        return books;
    }
);