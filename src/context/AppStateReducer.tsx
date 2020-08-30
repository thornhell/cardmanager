import {AppState} from './AppLists';
import {AddNewList, AddNewTask} from './Actions';
import {v4 as uuidv4} from 'uuid';
import {findItemIndexById} from '../utils/finditemById';

const AppStateReducer = (state: AppState, action: AddNewList | AddNewTask): AppState => {
    switch (action.type) {
        case 'ADD_LIST':
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                lists: [
                    ...state.lists, {id: uuidv4(), text: action.payload, tasks: []}
                ]
            }

        case 'ADD_TASK': {
            if (!action.payload.text) {
                return state;
            }
            const targetLaneIndex = findItemIndexById(
                state.lists,
                action.payload.id
            )
            state.lists[targetLaneIndex].tasks.push({
                id: uuidv4(),
                text: action.payload.text
            })
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
