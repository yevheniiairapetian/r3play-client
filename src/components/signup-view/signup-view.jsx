import React from "react";
import { useState } from "react";

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
            alert("Signup successful");
            window.location.reload();
          } else {
            alert("Signup failed");
          }
        });
      };
    return (
        <form onSubmit={handleSubmit}>
        
            <h4>Sign Up Form</h4>
            <label>
                Username *:
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="GoBeGood"
                    required
                    minLength="5" />
            </label><br />
            <label>
                Password *:
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="GoJonnyGo123"
                    required />
            </label><br />
            <label>
                Email *:
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jonny@mail.com"
                    required />
            </label><br />
            <label>
                Birth Date *:
                <input type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required />
            </label><br />
            <button>Sign Up</button>
        </form>
    )
}