import React from 'react';
import "./Sidenav.css";
import { Link } from 'react-router-dom';



function Sidenav() {
    return (
        <div className='d-flex'>
            <div className='col-auto'>
                <div className='sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100'>
                    <div>
                        <a href='d-flex align-items-center'>
                            {/* <i className='bi bi-bootstrap fs-5 me-2'></i> */}
                            <i className='bi bi-speedometer me-2 fs-5'></i>
                            <span className='fs-4'>Dashboard</span>
                        </a>
                        <div className='text-secondary mt-2'>
                            <ul className='nav nav-pills flex-column p-0 m-0'>
                                {/* <li className='nav-item p-1'>
                                    <Link to="/dashboard" className='nav-link text-white'>
                                        <i className='bi bi-speedometer me-2 fs-5'></i>
                                        <span className='fs-5'>Dashboard</span>
                                    </Link>
                                </li> */}
                                <li className='nav-item p-1'>
                                    <Link to="/users" className='nav-link text-white'>
                                        <i className='bi bi-people me-2 fs-5'></i>
                                        <span className='fs-5'>User</span>
                                    </Link>
                                </li>
                                <li className='nav-item p-1'>
                                    <Link to="/request" className='nav-link text-white'>
                                    <i class="bi bi-calendar2-plus me-2 fs-5"></i>
                                        <span className='fs-5'>Requests</span>
                                    </Link>
                                </li>
                                {/* <li className='nav-item p-1'>
                                    <Link to="/provider" className='nav-link text-white'>
                                        <i className='bi bi-table me-2 fs-5'></i>
                                        <span className='fs-5'>Providers</span>
                                    </Link>
                                </li> */}
                                <li className='nav-item p-1'>
                                    <Link to="/comment" className='nav-link text-white'>
                                        <i className='bi bi-grid me-2 fs-5'></i>
                                        <span className='fs-5'>Comments</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {/* <div className='text-secondary'>
                            <i className='bi bi-person fs-5'></i>
                            <span className='fs-4'>yourself</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenav;