import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";


export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showFailedSignupModal, setShowFailedSignupModal] = useState(false);
    const handleShowSignupModal = () => setShowSignupModal(true);
    const handleCloseSignupModal = () => setShowSignupModal(false);
    const handleShowFailedSignupModal = () => setShowFailedSignupModal(true);
    const handleCloseFailedSignupModal = () => setShowFailedSignupModal(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://r3play-934f9ea5664d.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                window.location.reload();
                handleShowSignupModal();
            } else {
                handleShowFailedSignupModal();
            }
        });
    };
    return (
        <>
            <Form className="pb-4 pt-4" onSubmit={handleSubmit}>

                <h4 className="text-success text-center pb-2 pt-4">Sign Up Form</h4>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="5"
                    />
                </Form.Group><br />
                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group><br />
                <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group><br />
                <Form.Group controlId="formDate">
                    <Form.Label>Date of birth:</Form.Label>
                    <Form.Control
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required

                    />
                </Form.Group><br />
                <Button className="bg-success w-100" variant="secondary" type="submit">
                    Submit
                </Button><br /><br />
            </Form>

            <Modal show={showSignupModal} onHide={handleCloseSignupModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-success">Signup Successful</Modal.Body>
                <Modal.Footer>
                    <Button className="bg-success" onClick={handleCloseSignupModal}>OK</Button>

                </Modal.Footer>
            </Modal>

            <Modal show={showFailedSignupModal} onHide={handleCloseFailedSignupModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-warning">Signup failed<br/> This may be due to: <br/> 1. The defined username already exists. <br/>2.The defined email already exists.</Modal.Body>
                <Modal.Footer>
                    <Button className="bg-success" onClick={handleCloseFailedSignupModal}>OK</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}