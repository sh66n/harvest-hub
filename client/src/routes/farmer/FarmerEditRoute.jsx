import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";

const getFarmer = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

function FarmerEditRoute() {
    const { id } = useParams();
    const getData = async () => {
        const farmerData = await getFarmer(id);
    };
    // console.log(farmerData);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="name" {...register("name")} />
            <button>Submit</button>
        </form>
    );
}

export default FarmerEditRoute;
