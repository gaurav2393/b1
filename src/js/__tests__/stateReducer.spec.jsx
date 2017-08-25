// import React from 'react';
import * as action from '../actions/actions';
import * as actionTypes from '../constants/actionTypes';
import reducer from '../reducers/stateReducer';


describe('Book Store Reducer', () => {

    const initialState = {
        search: {
            searchTerm: ""
        },
        booksData: []
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
        //expect(true).toBeTruthy();
    });

    it('should return the modified state after updating the search term', () => {
        const action = {
            type: actionTypes.HANDLE_SEARCH_TERM,
            searchValue: 'Two'
        };

        const finalState = {
            search: {
                searchTerm: 'Two'
            },
            booksData: []
        };

        expect(reducer(initialState, action)).toEqual(finalState);
    });

    it('should return the same booksData Array after updating the search term', () => {
        const action = {
            type: actionTypes.HANDLE_SEARCH_TERM,
            searchValue: 'Two'
        };

        const finalState = {
            search: {
                searchTerm: 'Two'
            },
            booksData: []
        };
        let finalBooksData = reducer(initialState, action).booksData;
        expect(finalBooksData).toEqual(initialState.booksData);
    });

    it('should return the modified state updating the books data array', () => {
        const action = {
            type: actionTypes.UPDATE_BOOKS_DATA,
            booksData: [{
                id: '1',
                name: 'Two State',
                description: 'It is a book about a guy in IIM'
            }]
        };

        const finalState = {
            search: {
                searchTerm: ''
            },
            booksData: [{
                id: '1',
                name: 'Two State',
                description: 'It is a book about a guy in IIM'
            }]
        };
        expect(reducer(initialState, action)).toEqual(finalState);
    });

    it('should return the same search state updating the books data array', () => {
        const action = {
            type: actionTypes.UPDATE_BOOKS_DATA,
            booksData: [{
                id: '1',
                name: 'Two State',
                description: 'It is a book about a guy in IIM'
            }]
        };

        const finalState = {
            search: {
                searchTerm: ''
            },
            booksData: [{
                id: '1',
                name: 'Two State',
                description: 'It is a book about a guy in IIM'
            }]
        };
        let finalSearch = reducer(initialState, action).search;
        expect(finalSearch).toEqual(initialState.search);
    });

});