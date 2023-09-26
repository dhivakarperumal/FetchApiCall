import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Produ = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(resu => setProducts(resu))

    }, [])
    return (
        <Container>
            <div className='text-center'>
                <h1 className='text-black mt-4'>Products</h1>
            </div>
            <Row className='mt-5'>
                {products.map(pros => (
                    <Col lg={3} md={6} >

                        <Card md={7}style={{ width: '18rem' ,height:'30rem' }} className='mt-3'  >
                            <Card.Img variant="top" src={pros.image} className='p-3'  width={200} height={200} md={7}/>
                            <Card.Body md={7}>
                                <h6>{pros.title}</h6>
                                <Card.Title>{pros.category}</Card.Title>
                                <h4>{pros.rating.rate}</h4>
                                <Card.Title>{pros.price}</Card.Title>
                                
                               <div className='text-center'>
                               <Button variant="primary">Add To Cart</Button>
                               </div>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Produ