export const ADD_LIST = 'ADD_LIST';
export const ADD_TASK = 'ADD_TASK';
export const MOVE_LIST = 'MOVE_LIST';

export interface AddNewList {
    type: typeof ADD_LIST;
    payload: string;
}

export interface AddNewTask {
    type: typeof ADD_TASK;
    payload: {
        text: string,
        id: string
    }
}

export interface MoveList {
    type: typeof MOVE_LIST;
    payload: {
        dragIndex: number,
        hoverIndex: number
    }
}
