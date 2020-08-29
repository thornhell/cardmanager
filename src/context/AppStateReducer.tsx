import React from 'react';
import {AppState} from './AppLists';
import {AddNewList, AddNewTask} from './Actions';

const AppStateReducer = (state: AppState, action: AddNewList | AddNewTask): AppState => {
    switch (action.type) {
        case 'ADD_LIST': {
            return {
                ...state,
                lists: [
                    ...state.lists, {id: uuid(), text: action.payload, tasks: []}
                ]
            }
        }
        case 'ADD_TASK': {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
};

export default AppStateReducer;
