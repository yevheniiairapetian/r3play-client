import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
                    alert("No such user");
                }
            })
            .catch((e) => {
                alert("Something went wrong");
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Login Form</h4>
            <label>
                Username:
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="JonnyBeGood"
                    minLength={5}
                    required
                />
            </label><br />
            <label>
                Password:
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="GoJonnyGo123"
                    required
                />
            </label><br />
            <button type="submit">Log In</button><br />
        </form>
    )
}