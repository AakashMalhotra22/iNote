import React,{useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => { 

    const [credential, setcredential] = useState({email:"",password:""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/v1/auth/login`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
        })
        const json = await response.json();
        if(json.welcome)
        {
            localStorage.setItem('token',json.authtoken);
            navigate("/home")
  
        }
        console.log(json.authtoken);
        
    }
    const onchange=(e)=>
    {
      setcredential({...credential,[e.target.name]: e.target.value})
    }
  
    return (
        <div className="container my-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credential.email} onChange={onchange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credential.password} onChange={onchange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
