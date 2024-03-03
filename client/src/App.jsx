import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [farmers, setFarmers] = useState([{}]);
    useEffect(() => {
        fetch("/api/farmers")
            .then((res) => res.json())
            .then((data) => {
                setFarmers(data);
            })
            .catch((e) => {
                console.log("Failed to fetch");
            });
    }, []);
    return (
        <div>
            <ul>
                {farmers.map((f) => (
                    <li key={f._id}>{f.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
