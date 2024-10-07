import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function Request() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [region, setRegion] = useState('');
    const [contact, setContact] = useState('');

    // const [user , setUser]=useState(users);
    // const inputHandler=(e)=>{
    //     const {name , value}=e.target;
    //     setUser({...user,[name]:value});
    //     console.log(user)
    // }

    const datas = {
        "name": name,
        "specialty": specialty,
        "region": region,
        "contact": contact
    }
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/createrequest', datas);
            console.log(response.datas);
            // toast.success(response.data.msg,{position:"top-right"})
        } catch (error) {
            console.log(error);
        }
    }

    const [providers, setProviders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/getallrequest')
            setProviders(response.data)
        }
        fetchData();

    })
    return (

        <div className="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Request Details</b></h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            New Request
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive " >
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Specialty</th>
                                    <th>Region</th>
                                    <th>Contact Info</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    providers.map((providers, index) => {
                                        return (
                                            <tr key={providers._id}>
                                                <td>{index+1}</td>
                                                <td>{providers.name}</td>
                                                <td>{providers.specialty}</td>
                                                <td>{providers.region}</td>
                                                <td>{providers.contact}</td>
                                                <td>
                                                    <button className='primary'>Assign Provider</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Enter Name" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" onChange={(e) => setSpecialty(e.target.value)} className="form-control" id="specialty" placeholder="Enter Specialty" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" onChange={(e) => setRegion(e.target.value)} className="form-control" id="region" placeholder="Enter Region" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" onChange={(e) => setContact(e.target.value)} className="form-control" id="contact" placeholder="Enter Phone Number" />
                                </div>
                                <button type="submit" onSubmit={submitForm}  onClick={handleClose} className="btn btn-success mt-4">Save</button>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Request