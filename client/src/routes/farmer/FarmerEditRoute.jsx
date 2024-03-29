import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";

function FarmerEditRoute() {
    const [farmer, setFarmer] = useState({ _id: "", name: "" });
    const { id } = useParams();
    useEffect(() => {
        async function getFarmerData() {
            const requestedFarmer = await axios.get(`${BASE_URL}/${id}`);
            setFarmer(requestedFarmer.data);
        }
        getFarmerData();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();
    const onSubmit = async (data) => {
        reset();
        navigate(`/farmers/${id}`);
        const response = await axios.patch(`${BASE_URL}/${id}`, data);
    };

    const handleChange = (e) => {
        setFarmer((currData) => {
            return {
                ...currData,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="name"
                {...register("name", {
                    required: {
                        value: true,
                        message: "You need to fill this field!",
                    },
                })}
                value={farmer.name}
                onChange={handleChange}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <button>Submit</button>
        </form>
    );
}

export default FarmerEditRoute;
