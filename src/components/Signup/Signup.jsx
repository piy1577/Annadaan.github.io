import React, { useState } from "react";
import { request } from "..";

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }); //for inputs in the form

    const [error, setError] = useState({ name: "", email: "", password: "" }); //for error coming in form
    const [show, setShow] = useState(false); //for show password

    return (
        <form
            className="signup"
            onClick={(e) => request.signUp(e, input, setError)}
        >
            <h1>Signup</h1>

            <div className="inputs">
                <label>
                    Name: <span>{error.name}</span>
                </label>
                <input
                    type="text"
                    value={input.name}
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, name: e.target.value };
                        })
                    }
                    required
                />
            </div>

            <div className="inputs">
                <label>
                    Email: <span>{error.email}</span>
                </label>
                <input
                    type="email"
                    value={input.email}
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, email: e.target.value };
                        })
                    }
                    autoComplete="username"
                    required
                />
            </div>

            <div className="inputs">
                <label>
                    password: <span>{error.password}</span>
                </label>
                <input
                    type={show ? "text" : "password"}
                    value={input.password}
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, password: e.target.value };
                        })
                    }
                    autoComplete="current-password"
                    required
                />
            </div>

            <div className="inputs">
                <label>Confirm password:</label>
                <input
                    type={show ? "text" : "password"}
                    value={input.confirmPassword}
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, confirmPassword: e.target.value };
                        })
                    }
                    autoComplete="current-password"
                    required
                />
            </div>

            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={show}
                    onChange={() => setShow((t) => !t)}
                />
                <label>Show password</label>
            </div>
            <div className="btn">
                <input type="submit" />
                <input type="reset" />
            </div>
        </form>
    );
};

export default Signup;
