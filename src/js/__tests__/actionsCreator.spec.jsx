import React from 'react';
import renderer from 'react-test-renderer';
import * as action from '../src/js/actions/actions.jsx';
import * as actionTypes from '../src/js/actiontypes/actionTypes';


describe('actions', () => {
    it('should create an action for loading tiles', () => {
        const expectedAction = {
            type: actionTypes.SHOW_DETAILS
        };
        expect(action.showDetailsFunction()).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for searched data', () => {
        const searchedData = '';
        const expectedAction = {
            type: actionTypes.SHOW_SEARCHED_DETAILS,
            searchedData: searchedData
        };
        expect(action.showSearchedDetailsFunction(searchedData)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for deleteSearchTerm', () => {
        const deleteSearchTermTest = '';
        const expectedAction = {
            type: actionTypes.CLEAR_SEARCH_TEXT
        };
        expect(action.clearSearchTextFunction(deleteSearchTermTest)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for filtered details', () => {
        const expectedAction = {
            type: actionTypes.SHOW_FILTERED_DETAILS
        };
        expect(action.showFilteredDetailsFunction()).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for searchTerm', () => {
        const searchTermTest = '';
        const expectedAction = {
            type: actionTypes.SEARCH_TEXT,
            searchText: searchTermTest
        };
        expect(action.searchTextFunction(searchTermTest)).toEqual(expectedAction)
    })
});



describe('actions', () => {
    it('should create an action for edit state for true', () => {
        const edit = true;
        const expectedAction = {
            type: actionTypes.EDIT_POPUP_STATE,
            edit: edit
        };
        expect(action.editPopUpFunction(edit)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for update json data from api', () => {
        const id ='';
        const payload ='';
        const expectedAction = {
            type: actionTypes.UPDATED_JSON_DATA,
            id: id,
            payload: payload
        };
        expect(action.upDateJsonDataFunction(id, payload)).toEqual(expectedAction)
    })
});