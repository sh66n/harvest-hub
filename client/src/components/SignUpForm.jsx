import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const BASE_URL = "http://localhost:5000";

function SignUpForm({ formFor }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        reset();
        try {
            const response = await axios.post(
                `${BASE_URL}/${formFor}/signup`,
                data
            );
        } catch (e) {
            console.log("something went wrong", e);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                {...register("username", {
                    required: {
                        value: true,
                        message: "Please enter a username!",
                    },
                })}
            />
            {errors.username && <span>{errors.username.message}</span>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
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

export default SignUpForm;
