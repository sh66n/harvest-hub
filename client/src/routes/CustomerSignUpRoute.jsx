import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "../components/SignUpForm";

function CustomerSignUpRoute() {
    return <SignUpForm formFor="customers" />;
}

export default CustomerSignUpRoute;
