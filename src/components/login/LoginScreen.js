import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Types } from "../../types/Types";


export const LoginScreen = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = () => {

    const action = {
      type: Types.login,
      payload: { name: 'Alexander', logged: true }
    }
    
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {  // me va a enviar a este path
      replace: true, // para que no se pueda volver
    }); 
  }

  return (
    <div className="container">
        <h1>Login Screen</h1>
        <hr/>

        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>
  )
}
