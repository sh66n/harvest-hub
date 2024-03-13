import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "../components/SignUpForm";

function FarmerSignUpRoute() {
    return <SignUpForm formFor="farmers" />;
}

export default FarmerSignUpRoute;
