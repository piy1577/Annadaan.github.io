import React, { useState } from "react";
import { request } from "..";

const Login = () => {
    const [input, setInput] = useState({ email: "", password: "" }); //for inputs in the form
    const [error, setError] = useState({ email: "", password: "" }); //for error coming in form
    const [show, setShow] = useState(false); //for show password

    return (
        <form
            onSubmit={(e) => request.login(e, input, setError)}
            className="login"
        >
            <h1>Login</h1>
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

export default Login;
