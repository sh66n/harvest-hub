import React, {useState} from "react";

function SignUp() {
    const [formData, setFormData] = useState({username: "", password: ""})
    const handleSubmit = async(e) => {
        e.preventDefault();
        setFormData({ username: "", password: "" });
        try {
            const response = await axios.post(BASE_URL, formData);
        } catch (e) {
            console.log("something went wrong", e);
        }
    }
    const handleChange = (e) => {
        setFormData((currData) => {
            return {
                ...currData,
                [e.target.name]: e.target.value 
            }
        })
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" />

        <button>Submit</button>
      </form>
    );
}

export default SignUp;
