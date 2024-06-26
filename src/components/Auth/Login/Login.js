import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import logo2 from '../../Assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AuthService from '../../../services/API';
import { useDispatch } from 'react-redux';
import { setLoader, UnsetLoader } from '../../../redux/actions/LoaderActions';

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: "onTouched"
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [toggle, setToggle] = useState(false);

    const onSubmit = (data, e) => {
        dispatch(setLoader());
        e.preventDefault();
        let obj = {
            "email": data.email,
            "password": data.password,
            "isStore": data.aopt === "store" ? false : true
        };
        AuthService.Login(obj)
            .then((res) => {
                dispatch(UnsetLoader());
                if (res) {
                    localStorage.setItem("access", res.data.access_token);
                    localStorage.setItem("refresh", res.data.refresh_token);
                    localStorage.setItem("userid", res.data._id);

                    !obj.isStore ? navigate("/create-store") : navigate("/");
                }
            }).catch((e) => {
                dispatch(UnsetLoader());
                setErrorMessage('Please enter the correct email address or password.');
                console.log(e);
            });
    }

    const handleClick = () => {
        navigate("/forgot");
    }

    const handleClicked = () => {
        navigate("/signup");
    }

    return (
        <div className='Signup-Page'>
            <div className='Navbar-Signup'>
                <Navbar />
            </div>
            <div className='middle-portion'> 
                <div className='login-heading'>
                    <p>Welcome Back Dear customer  <span className='ques'>!</span></p>
                    <div className="queue-image"></div>
                </div>
                <div className='login-container'>
                <div className="logo-container">
          <img className="login-logo" src={logo2} alt="logo" /> {/* Updated logo usage */}
        </div>
                <form className='input-login' onSubmit={handleSubmit(onSubmit)}>
                    <div className='radio-button'>
                        <div className='customer-radio'>
                            <label className='label-data' htmlFor="field-customer">
                                <input
                                    {...register("aopt", { required: "This field is required" })}
                                    type="radio"
                                    name="aopt"
                                    value="customer"
                                    id="field-customer"
                                />
                                customer
                            </label>
                        </div>
                        <div className='store-radio'>
                            <label className='label-data' htmlFor="field-store">
                                <input
                                    {...register("aopt", { required: "This field is required" })}
                                    type="radio"
                                    name="aopt"
                                    value="store"
                                    id="field-store"
                                />
                                Bank
                            </label>
                        </div>
                        <p className='alerts'>{errors.aopt?.message}</p>
                    </div>
                    <div className='form-container'>
                        <div className='emails'>
                            <input className='input-field' type="email" placeholder='Enter Email Address' name="email" {...register("email", { required: "Email is required", pattern: { value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "This is not a valid email" } })}></input>
                            <p className='alerts'>{errors.email?.message}</p>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='passwords'>
                            <i id="passlock" className="fa fa-eye" aria-hidden="true"></i>
                            {
                                toggle ? <i id='passlock' className="fa fa-eye-slash" aria-hidden="true" onClick={() => { setToggle(!toggle) }}></i> : <i id="passlock" className="fa fa-eye" aria-hidden="true" onClick={() => { setToggle(!toggle) }}></i>
                            }
                            <input className='input-field' type={toggle ? "text" : "password"} placeholder='Enter Password' name="password" {...register("password", { required: "password is required", minLength: { value: 8, message: "Password must be more than 8 characters" }, maxLength: { value: 14, message: "Password cannot exceed more than 14 characters" } })}></input>
                            <p className='alerts'>{errors.password?.message}</p>
                        </div>
                    </div>
                    {errorMessage && <p className='alerts'>{errorMessage}</p>}
                    <p className='forgot' onClick={handleClick}><u>Forgot password ?</u></p>
                    <button className='signup-btn' type='submit'>Login</button>
                    <p className='signup-head'>Create New Account <span onClick={handleClicked}>Signup</span></p>
                </form> 
                </div>
                
            </div>
           
        </div>
    );
}

export default Login;
