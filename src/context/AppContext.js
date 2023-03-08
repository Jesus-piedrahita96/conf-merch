//Importaciones ----------------------------------
//React
import React from 'react'

//Hooks
import { useStateInitial } from '../hooks/useStateInital';
import { useSumTotal } from '../hooks/useSumTotal';
//-------------------------------------------------
const AppContext = React.createContext()

function ProviderContext({ children }) {

  //instancias de hooks
  const initialState = useStateInitial()

  return (
    <AppContext.Provider
      value={
        initialState
      }
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