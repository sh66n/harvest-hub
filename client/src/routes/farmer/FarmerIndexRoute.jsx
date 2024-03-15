import React from "react";
// import FarmerForm from "../../components/farmer/FarmerForm";
import FarmerList from "../../components/farmer/FarmerList";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";

function FarmerIndexRoute() {
    const { handleSubmit } = useForm();
    const onSubmit = async () => {
        const res = await axios.post(`${BASE_URL}/logout`);
        console.log(res);
    };
    return (
        <div>
            {document.cookie && <span>You are logged in</span>}
            <FarmerList />
            {/* <FarmerForm /> */}
            <Link to="/farmers/new">Add new farmer</Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button>Logout</button>
            </form>
        </div>
    );
}

export default FarmerIndexRoute;
