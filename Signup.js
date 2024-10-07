import axios from 'axios';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Signup.css';
import Validation from './LoginValidations';



function Signup() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('')
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const[contact,setContact]=useState('');
    const[role,setRole]=useState('');
    // const [values, setValues] = useState({
    //     email: '',
    //     password: '',
    // })
    // const [errors, setErrors] = useState({})

    let navigate=useNavigate();

    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    // }

const data={"name":name,
"email":email,
"password":password,"age":age,"height":height,"weight":weight,"contact":contact,"role":role,
"gender":gender}
    const handleSubmit=async(e)=>{
     e.preventDefault()
    //  setErrors(Validation(values))
        // const handleSubmit = () => {
            //     // event.preventDefault();
                // setErrors(Validation(values))
                // axios.post("http://localhost:5000/register",{
                //     name:name,
                //     email:email,
                //     password:password
                // })
                //     .then((response) => {
                //       console.log(response);
                //       navigate('/login')
                //     });
                // };
        
        try{
            const response = await axios.post('http://localhost:5000/register',data);
            console.log(response.data);
            navigate('/login')
        } catch(error){
            console.log(error);
        }
    };

  return (
    <div className='containers'>
    <div className='d-flex justify-content-center align-items-center vh-100'> 
    <div className='bg-white p-3 rounded w-25'>
 
        <form action="" onSubmit={handleSubmit}>
            
        <div className='mb-3'>
                {/* <label>Name:</label> */}
                <input type='text' placeholder=' Enter your Name'  className='form-control rounded-0'   onChange={(e)=> setName(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                {/* <label>Email:</label> */}
                <input type='email' placeholder='Enter your email'  className='form-control rounded-0'  onChange={(e)=> setEmail(e.target.value)} required/>
                {/* {errors.email && <span className='text-danger'>{errors.email} </span>} */}
            </div>
            <div className='mb-3'>
                {/* <label>Age:</label> */}
                <input type='text' placeholder='Age'  className='form-control rounded-0'   onChange={(e)=> setAge(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                {/* <label>Age:</label> */}
                <input type='text' placeholder='Gender'  className='form-control rounded-0'   onChange={(e)=> setGender(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                {/* <label>Height:</label> */}
                <input type='text' placeholder='Height' className='form-control rounded-0'   onChange={(e)=> setHeight(e.target.value)} />
            </div>
            <div className='mb-3'>
                {/* <label>weight:</label> */}
                <input type='text' placeholder='Weight' className='form-control rounded-0'   onChange={(e)=> setWeight(e.target.value)} />
            </div>
            <div className='mb-3'>
                {/* <label>Contact Info:</label> */}
                <input type='text' placeholder='Enter Phone Number' className='form-control rounded-0'    onChange={(e)=> setContact(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                        <label>Role : </label>
                        <select className='form-control rounded-0'  onChange={(e)=> setRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>  
                    </div>     
            <div className='mb-3'>
                {/* <label>Password:</label> */}
                <input type='password' placeholder='Enter password' className='form-control rounded-0'   onChange={(e)=> setPassword(e.target.value)} required />
                {/* {errors.password && <span className='text-danger'>{errors.password} </span>} */}
            </div>
            

<div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
            {/* <button  type="submit" className='btn btn-success w-100'  onClick={handleSubmit}>Register</button> */}
           
        </form>
        </div>
    </div>
 </div>
)
}

export default Signup