import Image from "next/image";
import google from '../../public/images/form/google.svg';
import fav from '../../public/images/logo/fav.png';
import Link from "next/link";

const RegisterForm = () => {
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
                            <form className="registration-form">
                                <div className="input-wrapper">
                                    <label htmlFor="name">Username*</label>
                                    <input type="text" id="name" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password">Password*</label>
                                    <input type="password" id="password" />
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