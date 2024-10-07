import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill , BsBoxArrowInDownLeft } from "react-icons/bs";

function Usercard({user}) {
    return (
        <Card style={{ width: '30rem', margin: '25px 50px 75px 100px' }}>
            <Card.Header>User Details</Card.Header>
            <Card.Body>
                <Card.Title>Personal Information</Card.Title>
                <Card.Text><b>Name:</b>&nbsp;{user?.name}</Card.Text>
                <Card.Text><b>Age:</b>&nbsp;{user?.age}</Card.Text>
                <Card.Text><b>Email:</b>&nbsp;{user?.email}</Card.Text>
                <Card.Text><b>Height:</b>&nbsp;{user?.height}</Card.Text>
                <Card.Text><b>Weight:</b>&nbsp;{user?.weight}</Card.Text>
                <Card.Text><b>Gender:</b>&nbsp;{user?.gender}</Card.Text>
                <Card.Text><b>Contact Info:</b>&nbsp;{user?.contact}</Card.Text>
                <Button variant="primary"> Edit </Button>
                <br></br>
                <br></br>
                <Card.Link href="/request">Raise a Request </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Usercard