import {AppState} from './AppLists';
import {AddNewList, AddNewTask, MoveList, SetDraggedItem} from './Actions';
import {v4 as uuidv4} from 'uuid';
import {findItemIndexById} from '../utils/finditemById';
import {moveItem} from '../utils/moveItem';

const AppStateReducer = (state: AppState, action: AddNewList | AddNewTask | MoveList | SetDraggedItem): AppState => {
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

        case 'MOVE_LIST': {
            const {dragIndex, hoverIndex} = action.payload;
            state.lists = moveItem(state.lists, dragIndex, hoverIndex)
            return {
                ...state
            }
        }

        case 'SET_DRAGGED_ITEM': {
            return {
                ...state,
                draggedItem: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

export default AppStateReducer;
