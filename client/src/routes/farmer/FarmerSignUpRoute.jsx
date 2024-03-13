import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "../../components/login-signup-forms/SignUpForm";

function FarmerSignUpRoute() {
    return <SignUpForm formFor="farmers" />;
}

export default FarmerSignUpRoute;
