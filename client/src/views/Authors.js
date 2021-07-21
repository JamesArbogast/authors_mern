import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Authors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/authors")
        .then((res) => {
            setAuthors(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleDelete = (delId) => {
        axios
        .delete("http://localhost:5000/api/authors/" + delId)
        .then((res) => {
            // At this point it is deleted from DB but we need to cause a re-render to remove it from the page.
            const filteredAuthors = authors.filter((author) => {
            return author._id !== delId;
            });

            setAuthors(filteredAuthors);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
        <h3 style={{marginLeft: "90px"}}>All Authors</h3>
        {authors.map((author) => {
            return (
            <div
                key={author._id}
                style={{ width: "75%", margin: "0 auto", padding: "20px", display: "flex", border: "black 5px solid"}}
            >
                <h3 >
                <Link to={"/authors/" + author._id}>{author.name}</Link>
                </h3>
                <div style={{ width: "20%", margin: "0 auto", padding: "20px", display: "flex", alignContent: "center", border: "black 5px solid"}}>
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
            );
        })}
        </div>
    );
};

export default Authors;