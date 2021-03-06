import React, { Fragment, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword = () => {

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setMessage("");
            setLoading(true);
            console.log('hsjsj')
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions")
        } catch {
            setError('Failed to Reset Password')
        }
        setLoading(false);
    }

    return (
        <Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Reset Password </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                <Link to='/login'>Login</Link>
            </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </Fragment>
    )
}


export default ForgotPassword
