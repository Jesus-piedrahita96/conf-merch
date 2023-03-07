import React from 'react'
import { useStateInitial } from '../hooks/useStateInital';

const AppContext = React.createContext()

function ProviderContext({children}) {
  const initialState = useStateInitial()

  return (
    <AppContext.Provider
     value={initialState}
    >
      {children}
    </AppContext.Provider>
  );
}

function useDataCart() {
  const data = React.useContext(AppContext)
  return data
}

export {
  ProviderContext,
  useDataCart
};