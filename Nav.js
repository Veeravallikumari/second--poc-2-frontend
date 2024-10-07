import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    return (
        <div>
        <div className='header'>
        <nav>
            <h2>
            <a href="/" className="site-tittle"> Centene Home Care </a>
            </h2>
            <ul>
                <li>
                    <a href="/about" className='nav_link'>About</a>
                   </li>
                   <li>
                    <a href="/contact" className='nav_link'>Contact</a>
                </li>
                <li>
                <Link to="/login" className='buttons'>Login</Link>

                </li>
                <li>
                <Link to="/Signup" className='buttons'>Register</Link>
                </li>
            </ul>          
        </nav>
        </div>
        <section className='home'></section>
        </div>
    )
}

export default Nav