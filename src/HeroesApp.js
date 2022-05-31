import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './Routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'

// localStorage.setItem('user', JSON.stringify({logged: true, name:'Alexander'}));
// localStorage.removeItem('user');
const init = () => {
  // return {
  //   logged: true,
  //   name: 'Alexander Rodriguez',
  // }
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {

  
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    if(!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]) // para que se mantenga el user en el localStorage


  
  return (
    <AuthContext.Provider value={{user, dispatch}}>
        <AppRouter />
    </AuthContext.Provider>
  )
}
