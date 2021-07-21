import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Author = (props) => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/authors/" + props.id)
        .then((res) => {
            setAuthor(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [props.id]);

    const handleDelete = (delId) => {
        axios
        .delete("http://localhost:5000/api/authors/" + delId)
        .then((res) => {
            navigate("/authors");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handleEdit = (edtId) => {
        axios
        .put("http://localhost:5000/api/authors/" + edtId + "/edit")
        .then((res) => {
            navigate(`/authors/${edtId}/edit`);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    if (author === null) {
        return "Loading...";
    }

    return (
        <div>
        <h2 style={{marginLeft: "90px"}}>Single Author View</h2>
        <div style={{ width: "75%", margin: "0 auto", padding: "20px", display: "flex", border: "black 5px solid"}}>
            <h3>Name: {author.name}</h3>
            <div style={{ width: "20%", margin: "0 auto", padding: "20px", display: "flex", border: "black 5px solid"}}>
                <button 
                    style={{}}
                    onClick={(e) => {
                    handleEdit(author._id);
                    }}
                    style={{ color: "red", cursor: "pointer", margin: "5px" }}
                >Edit
                </button>
                <button
                    style={{margin: "5px"}}
                    onClick={(e) => {
                    handleDelete(author._id);
                    }}
                    style={{ color: "red", cursor: "pointer", margin: "5px" }}
                >Delete
                </button>
            </div>
        </div>
        </div>
    );
};

export default Author;