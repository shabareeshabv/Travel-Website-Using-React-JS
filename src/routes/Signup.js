import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3 (1).jpg";
import Footer from "../components/Footer";
import SignupPage from "../components/SignupPage";

function Signup() {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Signup"
                btnClass="hide"
            />
            <SignupPage/>
            <Footer/>
        </>
    );
}

export default Signup;
