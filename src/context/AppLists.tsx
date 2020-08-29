export interface AppState {
    lists: List[];
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
