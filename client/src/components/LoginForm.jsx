// @ts-nocheck
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const BASE_URL = "http://localhost:5000";

function LoginForm({ formFor }) {
    // const [formData, setFormData] = useState({ username: "", password: "" });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setFormData({ username: "", password: "" });
    //     try {
    //         const response = await axios.post(BASE_URL, formData);
    //     } catch (e) {
    //         console.log("something went wrong", e);
    //     }
    // };
    const onSubmit = async (data) => {
        reset(); //resets the form after submission
        try {
            const response = await axios.post(
                `${BASE_URL}/${formFor}/login`,
                data
            );
        } catch (e) {
            console.log("something went wrong in the login!", e);
        }
    };

    // const handleChange = (e) => {
    //     setFormData((currData) => {
    //         return {
    //             ...currData,
    //             [e.target.name]: e.target.value,
    //         };
    //     });
    // };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                // name="username"
                // onChange={handleChange}
                // value={formData.username}
                {...register("username", {
                    required: {
                        value: true,
                        message: "Please enter username!",
                    },
                })}
            />
            {errors.username && <span>{errors.username.message}</span>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                // name="password"
                // onChange={handleChange}
                // value={formData.password}
                {...register("password", {
                    required: {
                        value: true,
                        message: "Please enter a password!",
                    },
                })}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button>Submit</button>
        </form>
    );
}

export default LoginForm;
