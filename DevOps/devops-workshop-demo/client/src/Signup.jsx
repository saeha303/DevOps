import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Signup() {

    const [name, setName] =useState()
    const [nid, setNid] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    

    const handleSubmit =(e)=> {
        e.preventDefault()
        axios.post('http://127.0.0.1:3001/register', {name,nid,address,password})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }


    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>
                                Name
                            </strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)}
                         />
                    </div>
                    <div>
                        <label htmlFor="email">
                            <strong>
                                Nid
                            </strong>
                        </label>
                        <input type="text" placeholder="Enter Nid" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setNid(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">
                            <strong>
                                Address
                            </strong>
                        </label>
                        <input type="text" placeholder="Enter Address" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">
                            <strong>
                                Password
                            </strong>
                        </label>
                        <input type="password" placeholder="Enter Password" autoComplete="off" name="Password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)}
                         />
                    </div>


                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                     </form>
                     
                    <p>Already Have an Account</p>
                    <Link to='/login' className="btn btn-default border w-100 bg-light rounder-0 text-decoration-none">
                        Login
                    </Link>
                

               
            </div>
        </div>

    );
}

export default Signup;