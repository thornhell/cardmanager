import { DragItem } from "../utils/dragItem";

export interface AppState {
    lists: List[];
    draggedItem: DragItem | undefined;
}

interface List {
    id: string;
    text: string;
    tasks: Task[];
}

interface Task {
    id: string;
    text: string;
}

const appLists: AppState = {
    draggedItem: undefined,
    lists: [
        {
            id: '0',
            text: 'ToDo',
            tasks: [{id: '0', text: 'Sample text'}]
        },
        {
            id: '1',
            text: 'In progress',
            tasks: [{id: '0', text: 'Sample text'}]
        },
        {
            id: '2',
            text: 'Finished',
            tasks: [{id: '0', text: 'Sample text'}]
        },
    ]
}

export default appLists;
