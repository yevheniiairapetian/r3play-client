import React from "react";
import { useState } from "react";
import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import {Footer} from '../footer/footer';
import { faCircleInfo, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    function loadSignSpinner (){
        let loginButton = document.querySelector('.signMeUp')
        let loader = document.querySelector('.sign-load-spinner');
        let signSpan = document.querySelector('.sign-span')

        loginButton.addEventListener('click', function (e) {
            e.preventDefault;
            setTimeout(function () {
              loader.classList.add('sign-show');
              signSpan.classList.add('sign-span-hidden');
            }, 400),
             setTimeout(function () {
                loader.classList.remove('sign-show');
                signSpan.classList.remove('sign-span-hidden');

                
              }, 2000)
          })
    }

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
        <div className="signup-view container-profile h-120">
        <Row className="signup-view container">
        <Col className="m-auto" md={8} xl={6} lg={6} sm={6} xs={10}>
            <Form className="pb-4 pt-4" onSubmit={handleSubmit}>

                <h4 className="text-success text-center pb-4 pt-4">Sign Up</h4>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="5"
                        maxLength="20"
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
                        minLength="8"
                        maxLength="20"
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
                <Button onClick={loadSignSpinner}
                    className="bg-success w-100 signMeUp" variant="secondary" type="submit">
                    <span className="sign-span">Sign me Up!</span>
                    <FontAwesomeIcon className="sign-load-spinner" icon={faSpinner} spin size="sm" style={{color: "#f0f2f5",}} />
                    
</Button>

            </Form>

            <Modal 
            className="favorite-modal"
            show={showSignupModal} onHide={handleCloseSignupModal}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className="text-success">Signup</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="pt-2 login-modal-body">
                <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

                    Signup Successful</Modal.Body>
                {/* <Modal.Footer> */}
                    <Button className="got-it-button text-dark bg-white" onClick={handleCloseSignupModal}>Got it!</Button>

                {/* </Modal.Footer> */}
            </Modal>

            <Modal 
            className="update-failed-modal"
            show={showFailedSignupModal} onHide={handleCloseFailedSignupModal}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className="text-danger">Signup</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="pt-4 login-modal-body">
                <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#ffd43b", }} size="lg" />

                    Failed.<br/> Possible reasons: <br/> 1. Username is already taken. <br/>2.Email already exists.</Modal.Body>
                {/* <Modal.Footer> */}
                    <Button className="got-it-button text-dark bg-white" onClick={handleCloseFailedSignupModal}>Got it!</Button>

                {/* </Modal.Footer> */}
            </Modal>
        </Col>
        
        </Row>
        </div>
    )
}