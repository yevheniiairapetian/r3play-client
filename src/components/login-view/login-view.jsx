import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Footer} from '../footer/footer';

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showFailedLoginModal, setShowFailedLoginModal] = useState(false);
    const [showWentWrongModal, setShowWentWrongModal] = useState(false);
    const handleShowFailedLoginModal = () => setShowFailedLoginModal(true);
    const handleCloseFailedLoginModal = () => setShowFailedLoginModal(false);
    const handleShowWentWrongModal = () => setShowWentWrongModal(true);
    const handleCloseWentWrongModal = () => setShowWentWrongModal(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Username: username,
            Password: password
        }

        fetch("https://r3play-934f9ea5664d.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Login response: ", data);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", data.token);
                    onLoggedIn(data.user, data.token);
                } else {
                    handleShowFailedLoginModal();
                }
            })
            .catch((e) => {
                handleShowWentWrongModal();
            });
    }
    return (
        <>
        <>
            <Form className="pb-4 pt-4" onSubmit={handleSubmit}>
                <h4 className="text-success text-center pb-2 pt-4">Login Form</h4>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        placeholder="Your username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="5"
                    />
                </Form.Group><br />
                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group><br />
                <Button className="bg-success w-100" variant="secondary" type="submit">
                    Submit
                </Button><br />
            </Form>
            
            <Modal show={showFailedLoginModal} onHide={handleCloseFailedLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-warning">Login failed. <br/> This may be due to: <br/> 1. Incorrect username. <br/>2. Incorrect password.</Modal.Body>
                <Modal.Footer>
                    <Button className="bg-success" onClick={handleCloseFailedLoginModal}>OK</Button>

                </Modal.Footer>
            </Modal>
            <Modal show={showWentWrongModal} onHide={handleCloseWentWrongModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Information</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-warning">Something went wrong. <br/> Please check your internet connection and try again.</Modal.Body>
                <Modal.Footer>
                    <Button className="bg-success" onClick={handleCloseWentWrongModal}>OK</Button>

                </Modal.Footer>
            </Modal>
            
        </>
        <Footer/>
        </>
    )
}