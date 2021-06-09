import React from 'react';
import { Container,Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn(props) {
    return (
        <div>
            <h1>Sign In</h1>
            <br></br>
        <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <div className='row'>
                    <div className="col-md-3">
                        <Form.Label>Email address</Form.Label>
                        </div><div className="col-md-9">
                        <Form.Control type="email" placeholder="Enter email" /> 
                    </div>
                </div>        
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                
                <div className='row'>
                    <div className="col-md-3">
                        <Form.Label>Password</Form.Label>
                        </div><div className="col-md-9">
                        <Form.Control type="password" placeholder="Password" /> 
                    </div>
                </div> 
            </Form.Group>
            <div className='row'>
            <div className="col-md-10">
            </div><div className="col-md-2">
                <Button variant="primary" type="submit">
                    Sign-In
                </Button>
            </div>
            </div>
            
        </Form>
        </Container>
        </div>
    );
}

export default SignIn;