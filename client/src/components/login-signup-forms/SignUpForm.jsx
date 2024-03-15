import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const BASE_URL = "http://localhost:5000/api";

function SignUpForm({ formFor }) {
    const [error, setError] = useState("");
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
            setError("Username is already taken!");
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            {error && <span>{error}</span>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Please enter a name!",
                        },
                    })}
                />
                {errors.name && <span>{erros.name.message}</span>}

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
        </div>
    );
}

export default SignUpForm;
