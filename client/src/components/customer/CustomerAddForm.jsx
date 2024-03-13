import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/api/customers";

function FarmerAddForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        reset();
        navigate("/customers");
        const response = await axios.post(BASE_URL, data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Name"
                {...register("name", {
                    required: {
                        value: true,
                        message: "enter a name you retard",
                    },
                })}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <button>Add</button>
        </form>
    );
}

export default FarmerAddForm;
