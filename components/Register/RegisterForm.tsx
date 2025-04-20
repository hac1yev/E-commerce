"use client";

import Image from "next/image";
import google from '../../public/images/form/google.svg';
import fav from '../../public/images/logo/fav.png';
import Link from "next/link";
import { FormEvent } from "react";
import axios from "axios";

const RegisterForm = () => {

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            const data = {
                email: formData.get("email"),
                username: formData.get("username"),
                password: formData.get("password")
            }
            const response = await axios.post('/api/register', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="rts-register-area rts-section-gap bg_light-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="registration-wrapper-1">
                            <div className="logo-area mb--0">
                                <Image className="mb--10" src={fav} alt="logo" />
                            </div>
                            <h3 className="title">Register Into Your Account</h3>
                            <form className="registration-form" onSubmit={handleRegister}>
                                <div className="input-wrapper">
                                    <label htmlFor="name">Username*</label>
                                    <input type="text" name="username" id="name" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password">Password*</label>
                                    <input type="password" name="password" id="password" />
                                </div>
                                <button className="rts-btn btn-primary">Register Account</button>
                                <div className="another-way-to-registration">
                                    <div className="registradion-top-text">
                                        <span>Or Register With</span>
                                    </div>
                                    <div className="login-with-brand">
                                        <Link href="/" className="single">
                                            <Image width={30} height={30} src={google} alt="login" />
                                        </Link>
                                    </div>
                                    <p>Already Have Account? <Link href="/login">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;