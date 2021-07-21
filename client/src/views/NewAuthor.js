import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const NewAuthor = (props) => {
    const [ name, setName ] = useState("");

    const [errors, setErrors] = useState(null);

    const handleNewAuthorSubmit = (event) => {
        event.preventDefault();
        const newAuthor = {
            name: name,
        };

        axios
            .post("http://localhost:5000/api/authors", newAuthor)
            .then((res) => {
                console.log(res);
                navigate(`/authors`);
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors);
            });
    };

    return (
        <div className="App">
            <h3 className="">New Author</h3>

            <form
                onSubmit={(e) => {
                    handleNewAuthorSubmit(e);
                }}
            >
            <div className="form-group">
                <label className="h6">Name: </label>
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
                <div>
                    {errors?.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                    )}
                </div>
            </div>
            <Link to="/authors"><button style={{ color: "red", cursor: "pointer", margin: "5px", padding: "5px 20px 5px 20px" }}>Cancel</button></Link>
            <button style={{cursor: "pointer", margin: "5px", padding: "5px 20px 5px 20px"}}>Submit</button>
            </form>
        </div>
    );
};

export default NewAuthor;