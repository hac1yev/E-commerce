"use client";

import Image from "next/image";
import google from '../../public/images/form/google.svg';
import fav from '../../public/images/logo/fav.png';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

const RegisterForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (data: FieldValues) => {                
        try {
            const formData = {
                username: data.username,
                email: data.email,
                password: data.password
            }
            const response = await axios.post('/api/register', JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response);
            
            if(response.status === 200) {                
                router.replace('/login');
            }
            
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              setErrorMessage(error.response?.data?.message || "Something went wrong!");
            } else {
              setErrorMessage("Unexpected error occurred!");
            }
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
                            {errorMessage && (
                                <div className="error-bg">
                                    <p>{errorMessage}</p>
                                </div>
                            )}
                            <form className="registration-form" onSubmit={handleSubmit(handleRegister)}>
                                <div className="input-wrapper">
                                    <label htmlFor="name">Username*</label>
                                    <input 
                                        type="text" 
                                        {...register("username", { required: "Username is required!", minLength: {
                                            value: 6,
                                            message: 'Username must be at least 6 caracters!'
                                        } })}
                                        name="username" 
                                        id="name" 
                                    />
                                    {errors['username'] && (
                                        <p className="error">{errors['username'].message as string}</p>
                                    )}
                                </div>
                                
                                <div className="input-wrapper">
                                    <label htmlFor="email">Email*</label>
                                    <input 
                                        type="email" 
                                        {...register("email", {
                                            required: "Email is required!",
                                            pattern: {
                                              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                              message: "Invalid email address!",
                                            },
                                        })}
                                        name="email" 
                                        id="email" 
                                    />
                                    {errors['email'] && (
                                        <p className="error">{errors['email'].message as string}</p>
                                    )}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password">Password*</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        {...register("password", {
                                            required: "Password is required!",
                                            minLength: {
                                              value: 6,
                                              message: "Password must be at least 6 caracters!",
                                            },
                                            maxLength: {
                                              value: 20,
                                              message: "Password can not longer than 20 caracters!",
                                            },
                                        })}
                                        name="password" 
                                    />
                                    {errors['password'] && (
                                        <p className="error">{errors['password'].message as string}</p>
                                    )}
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