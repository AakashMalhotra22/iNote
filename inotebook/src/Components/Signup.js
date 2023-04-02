import React,{useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [credential, setcredential] = useState({name:"", email:"",password:"", cpasword:""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {name,email,password,cpasword} = credential;
        try{
        const response = await fetch(`http://localhost:5000/api/v1/auth/createuser`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
        })
        
        const json = await response.json();
        console.log(json);
        navigate("/login")
        }
        catch{
          alert("user already exist")
        }
        
        
  

        
    }
    const onchange=(e)=>
    {
      setcredential({...credential,[e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name="name" value={credential.name} onChange={onchange} aria-describedby="e1mailHelp" />
                 </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credential.email} onChange={onchange} aria-describedby="e2mailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credential.password} onChange={onchange} id="password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="cpassword" className="form-control" name="cpassword" value={credential.cpassword} onChange={onchange} id="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
  )
}

export default Signup
