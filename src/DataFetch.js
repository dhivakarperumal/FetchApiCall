import React, { useEffect, useState } from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

const DataFetch = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(result => setUsers(result))
    }, [])

    return (

        <>
            <Container>
            <div className='text-center'>
                <h1 className='text-black mt-5'>User Details</h1>
            </div>
                <Row className='mt-5'>
                    {users.map(data => (
                        <Col lg={3} md={7} key={data.id}>
                            <Card className='mt-3' md={7}>
                                <Card.Header>{data.id}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Title>{data.email}</Card.Title>
                                    <Card.Title>{data.username}</Card.Title>
                                    <Card.Title>{data.address.zipcode}</Card.Title>
                                    <Card.Title>{data.address.geo.lat}</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
        </>
    )
}

export default DataFetch