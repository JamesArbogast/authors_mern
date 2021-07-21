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
                <label className="h6">Name</label>
                {errors?.name && (
                <span className="text-danger">{errors?.name?.message}</span>
                )}
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <Link to="/authors"><button>Cancel</button></Link>
            <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    );
};

export default NewAuthor;