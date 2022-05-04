import { useNavigate } from "react-router-dom";


export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/marvel", {  // me va a enviar a este path
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
