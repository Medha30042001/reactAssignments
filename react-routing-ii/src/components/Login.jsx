import { useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPwd] = useState("");
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const isLoggedIn = (localStorage.getItem("isLoggedIn") || "") === "true";
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "admin@123"){
            localStorage.setItem("isLoggedIn", "true");
            navigate('/todos');
        }else{
            localStorage.setItem("isLoggedIn", "false");
            setError("Incorrect credentials");
        }
    }

    if(isLoggedIn){
        return <Navigate to='/todos'/>
    }

  return (
    <>
    <div className="content">
        <div className="formDiv">
            <h1>Login Form</h1>
            <form action="">
                <input type="email"
                    placeholder="Enter Email"
                    autoComplete="none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef} />
                <input type="password"
                    placeholder="Enter password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPwd(e.target.value)}
                    ref={pwdRef} />
                {error && (<p style={{color:'red'}}>{error}</p>)}
                <button onClick={handleLogin}
                className="loginBtn">Login</button>
                
            </form>
        </div>
        
    </div>
        
    </>
  )
}

export default Login