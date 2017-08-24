import React from 'react';
import * as action from '../actions/actions';
import * as actionTypes from '../constants/actionTypes';
import reducer from '../reducers/statereducer';


describe('tiles reducer', () => {

    const initialState = {
        items: [],
        edit: false,
        searchText: "",
        filteredItems: []
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should return the modified state after loading the tiles', () => {
        const action = {
            type: actionTypes.UPDATED_JSON_DATA_ACTION,
            items: [
                {
                    "id": "1",
                    "name": "season123456",
                    "description": "This is for season 123456"
                }]
        };

        const finalState = {
            searchText: "",
            items: [
                {
                    "id": "1",
                    "name": "season123456",
                    "description": "This is for season 123456"
                }],
            filteredItems: [],
            edit: false
        };

        expect(reducer(initialState, action)).toEqual(finalState);
    });
    it('should change the modal status in the state', () => {
        const action = {
            type: actionTypes.EDIT_POPUP_STATE,
            edit: true,
        };

        const finalState = {
            searchText: "",
            items: [],
            filteredItems: [],
            edit: true
        };

        expect(reducer(initialState, action)).toEqual(finalState);
    });

    it('set searched details with value', () => {
        expect(reducer(initialState, {type: actionTypes.SHOW_SEARCHED_DETAILS, searchedData: []})).toEqual({

            searchText: "",
            items: [],
            edit: false,
            filteredItems: []
        })
    });

    it('clear search term', () => {
        expect(reducer(initialState, {type: actionTypes.CLEAR_SEARCH_TEXT, searchText: 'delete-search-Term'})).toEqual({
            searchText: "",
            items: [],
            edit: false,
            filteredItems: []
        })
    });


    it('loaded details', () => {
        expect(reducer(initialState, {type: actionTypes.SHOW_DETAILS_ACTION, items: ['1']})).toEqual({
            searchText: "",
            items: ['1'],
            edit: false,
            filteredItems: []
        })
    });

    it('loaded details', () => {
        expect(reducer(initialState, {type: actionTypes.SHOW_FILTERED_DETAILS_ACTION, items: ['1']})).toEqual({
            searchText: "",
            items: ['1'],
            edit: false,
            filteredItems: []
        })
    });
});