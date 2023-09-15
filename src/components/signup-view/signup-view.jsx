import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";


export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
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
              alert("Signup successful. You can login now");
              window.location.reload();
            } else {
              alert("Signup failed");
            }
          });
        };
    return (
        <Form className="pt-4" onSubmit={handleSubmit}>

            <h4 className="text-success">Sign Up Form</h4>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group><br />
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formDate">
                <Form.Label>Date:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                    
                />
            </Form.Group><br />
            <Button className="bg-success" variant="secondary" type="submit">
                Submit
            </Button><br /><br />
        </Form>
    )
}