import React, {createContext, useContext} from 'react';
import appLists, { AppState } from './AppLists';

interface AppStateContextProps {
    state: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
    return (
        <AppStateContext.Provider value={{state: appLists}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}


