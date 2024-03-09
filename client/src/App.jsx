import React, { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "http://localhost:5000/api/farmers";

function App() {
    const [farmers, setFarmers] = useState([{ _id: "", name: "" }]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch(RANDOM_QUOTE_URL);
        const data = await res.json();
        setFarmers(data);
    };

    return (
        <>
            {farmers.map((f) => (
                <li key={f._id}>{f.name}</li>
            ))}
        </>
    );
}

export default App;
