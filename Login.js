import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidations';
import axios from 'axios';
import "./Login.css";


function Login() {
    sessionStorage.removeItem("user")
    const [values, setValues] = useState({
        role:'',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    let navigate = useNavigate()
    // useEffect(()=>{
    //     axios.post("http://localhost:5000/register",{
    //         name:"veeravalli",
    //         email:'abc@gmail.com',
    //         password:'pass@230987'
    //     })
    //         .then((response) => {
    //           console.log(response);
    //         });
    // })


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data", values);
        setErrors(Validation(values))

        try {
            const response = await axios.post('http://localhost:5000/login', values);
            let user=response.data.userDetails;
            sessionStorage.setItem("user",JSON.stringify(user));
            console.log("msg",response.data);
            navigate('/sidenav')
        } catch (error) {
            // window.alert(error.message)
            console.log(error);
        }

    }
    return (
        <div className='abc'>
        <div className='d-flex justify-content-center align-items-center  vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Role : </label>
                        <select  onChange={handleInput} className='form-control'>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>  
                    </div>
                    <div className='mb-3'>
                        <label>Email:</label>
                        <input type='email' placeholder='enter email' name='email' onChange={handleInput} className='form-control' />
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label>Password:</label>
                        <input type='password' placeholder='enter password' name='password' onChange={handleInput} className='form-control' />
                        {errors.password && <span className='text-danger'>{errors.password} </span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Login</button>
                    <p></p>
                    <p className="forgot-password text-right">
          New on Our Platform ?<a href="/Signup">sign up</a>
        </p>
                    {/* <Link to="/Signup" className='btn btn-default border w-100 bg-light'>Create Account</Link> */}
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login;
