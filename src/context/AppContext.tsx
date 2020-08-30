import React, {createContext, useContext, useReducer} from 'react';
import appLists, { AppState } from './AppLists';
import AppStateReducer from './AppStateReducer';

interface AppStateContextProps {
    state: AppState;
    dispatch: any;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(AppStateReducer, appLists)
    return (
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}


