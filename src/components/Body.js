import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Body.css";
export default function Section1() {
    return (
        <div className="App">
            <section style={{textAlign: 'center'}} className="inner-page-banner mb-5 whiteText">
                <h1>Welcome to SIBAU AMS</h1>


                <div className='container bg-primary w-75 rounded mt-5 '>
                    <Form className="pt-3 pb-4">
                        

                        <Row className="pt-3">
                          
                            <Col md={{span: 7, offset:2}}>
                            <h3>I am a : </h3>
                                <Form.Group>
                                    <Form.Control as="select" size="lg" placeholder="Select Subject">
                                        <option>Student</option>
                                        <option>Teacher</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="success" type="submit" size="lg" >
                                    Find
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </div>
    );
}