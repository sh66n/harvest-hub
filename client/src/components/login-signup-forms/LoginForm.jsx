/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/api";

function LoginForm({ formFor }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const login = (jwtToken) => {
        cookies.set("jwt_auth", jwtToken);
        console.log(cookies.cookies); //{jwt_auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid…jEzfQ.yZ6wJh2uL_HLAI6JFPD8l2edaU5ZxXCaxlxK292ss1o'}
        const decodedData = jwtDecode(jwtToken);
        setUser(decodedData);
    };

    const logout = () => {
        setUser(null);
        cookies.remove("jwt_auth");
    };

    const onSubmit = async (data) => {
        reset(); //resets the form after submission
        try {
            const response = await axios.post(
                `${BASE_URL}/${formFor}/login`,
                data
            );
            const token = response.data.accessToken;
            localStorage.setItem("accessToken", token);
            console.log(token);
        } catch (e) {
            setError("invalid");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <span>{error}</span>}
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
        </div>
    );
}

export default LoginForm;
