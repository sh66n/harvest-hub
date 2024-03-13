import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "../../components/login-signup-forms/SignUpForm";

function CustomerSignUpRoute() {
    return <SignUpForm formFor="customers" />;
}

export default CustomerSignUpRoute;
