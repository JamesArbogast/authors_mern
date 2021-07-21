import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const EditAuthor = (props) => {
    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/authors/" + props.id)
            .then((res) => {
                console.log(res);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleEditAuthorSubmit = (event) => {
    event.preventDefault();

    const editedAuthor = {
        name : name,
    };

    axios
        .put(
            `http://localhost:5000/api/authors/${props.id}/edit`,
            editedAuthor
        )
        .then((res) => {
            console.log(res);
            navigate("/authors/" + props.id);
        })
        .catch((err) => {
        /* 
        This .catch only happens if the controller .catch has:
        res.status(400).json(err);
        */
            setErrors(err.response?.data?.errors);
            console.log(err);
        });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">New Author</h3>

            <form
                onSubmit={(e) => {
                handleEditAuthorSubmit(e);
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
                    value={name}
                />
        </div>

        <button className="btn btn-sm btn-outline-success">Save</button>
        </form>
    </div>
    );
};

export default EditAuthor;