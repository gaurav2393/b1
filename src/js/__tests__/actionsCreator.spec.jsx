import React from 'react';
import * as action from '../actions/actions';
import * as actionTypes from '../constants/actionTypes';


describe('actions', () => {

    it('should create an action for storing new search term value in state', () => {
        const searchValue = 'Search Value';
        const expectedAction = {
            type: actionTypes.HANDLE_SEARCH_TERM,
            searchValue: searchValue
        };
        expect(action.handleSearchTerm(searchValue)).toEqual(expectedAction)
    });

    it('should create an action for fetching books tile data', () => {
        const expectedAction = {
            type: actionTypes.FETCH_BOOKS_DATA
        };
        expect(action.fetchBooksData()).toEqual(expectedAction)
    });

    it('should create an action for updating books data value in state', () => {
        const booksData = [{
            id: "1",
            name: "Deception",
            description: "Something"
        }];
        const expectedAction = {
            type: actionTypes.UPDATE_BOOKS_DATA,
            booksData: booksData
        };
        expect(action.updateBooksData(booksData)).toEqual(expectedAction)
    });

    it('should create an action for storing new books data value in state', () => {
        const bookData = [{
            id: "1",
            name: "Deception",
            description: "Something"
        }];
        const expectedAction = {
            type: actionTypes.STORE_BOOK_DATA,
            bookData: bookData
        };
        expect(action.storeBookData(bookData)).toEqual(expectedAction)
    });
});


// describe('actions', () => {
//     it('should create an action for searched data', () => {
//         const searchedData = '';
//         const expectedAction = {
//             type: actionTypes.SHOW_SEARCHED_DETAILS,
//             searchedData: searchedData
//         };
//         expect(action.showSearchedDetailsFunction(searchedData)).toEqual(expectedAction)
//     })
// });


// describe('actions', () => {
//     it('should create an action for deleteSearchTerm', () => {
//         const deleteSearchTermTest = '';
//         const expectedAction = {
//             type: actionTypes.CLEAR_SEARCH_TEXT
//         };
//         expect(action.clearSearchTextFunction(deleteSearchTermTest)).toEqual(expectedAction)
//     })
// });

// describe('actions', () => {
//     it('should create an action for filtered details', () => {
//         const expectedAction = {
//             type: actionTypes.SHOW_FILTERED_DETAILS
//         };
//         expect(action.showFilteredDetailsFunction()).toEqual(expectedAction)
//     })
// });


// describe('actions', () => {
//     it('should create an action for searchTerm', () => {
//         const searchTermTest = '';
//         const expectedAction = {
//             type: actionTypes.SEARCH_TEXT,
//             searchText: searchTermTest
//         };
//         expect(action.searchTextFunction(searchTermTest)).toEqual(expectedAction)
//     })
// });



// describe('actions', () => {
//     it('should create an action for edit state for true', () => {
//         const edit = true;
//         const expectedAction = {
//             type: actionTypes.EDIT_POPUP_STATE,
//             edit: edit
//         };
//         expect(action.editPopUpFunction(edit)).toEqual(expectedAction)
//     })
// });

// describe('actions', () => {
//     it('should create an action for update json data from api', () => {
//         const id ='';
//         const payload ='';
//         const expectedAction = {
//             type: actionTypes.UPDATED_JSON_DATA,
//             id: id,
//             payload: payload
//         };
//         expect(action.upDateJsonDataFunction(id, payload)).toEqual(expectedAction)
//     })
// });