import React, { useEffect, useState } from "react";
import { request } from "..";
const Upload = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phoneNumber: 0,
        images: [],
        state: "",
        address: "",
    }); //for inputs in the form

    const [error, setError] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        images: [],
        state: "",
        address: "",
    }); //for error coming in form

    const [states, setStates] = useState([]);

    useEffect(() => {
        request.getStates(setStates);
    }, []);

    return (
        <form
            className="upload"
            onClick={(e) => request.signUp(e, input, setError)}
        >
            <h1>Upload</h1>

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
                    Phone Number: <span>{error.phoneNumber}</span>
                </label>
                <input
                    type="number"
                    value={input.phoneNumber}
                    max={1000000000}
                    min={9999999999}
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, phoneNumber: e.target.value };
                        })
                    }
                    autoComplete="username"
                    required
                />
            </div>

            <div className="inputs">
                <label>
                    Image: <span>{error.images}</span>
                </label>
                <input
                    type="file"
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, images: e.target.files };
                        })
                    }
                    autoComplete="username"
                    required
                />
            </div>

            <div className="inputs">
                <label>
                    State:<span>{error.state}</span>
                </label>
                <select
                    value={input.state}
                    onChange={(e) =>
                        setInput((t) => {
                            return { ...t, state: e.target.value };
                        })
                    }
                    required
                >
                    <option>Select a location</option>
                    {states.map((item, i) => (
                        <option key={i} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            <div className="address">
                <label>
                    Full Address: <span>{error.address}</span>
                </label>
                <textarea
                    value={input.address}
                    onInput={(e) =>
                        setInput((t) => {
                            return { ...t, address: e.target.value };
                        })
                    }
                    required
                ></textarea>
            </div>

            <div className="btn">
                <input type="submit" />
                <input type="reset" />
            </div>
        </form>
    );
};

export default Upload;
