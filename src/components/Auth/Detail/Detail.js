import React, { useState, useRef } from 'react';
import './Detail.css';
import Navbar from '../../Layout/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import photo1 from '../../Assets/customer.svg';
import photo2 from '../../Assets/store.svg';
import photo3 from '../../Assets/user.svg';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../../redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../../services/API';
import { setLoader, UnsetLoader } from '../../../redux/actions/LoaderActions';

const Details = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pass } = useSelector((state) => state.AuthReducer);

    const [role, setRole] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null); // State to manage selected role

    const onSubmit = (data, e) => {
        dispatch(setLoader());
        e.preventDefault();
        
        if (role !== null) {
            dispatch(actionCreators.userName(data.fullname));
            dispatch(actionCreators.userMobile(data.mobile));
            dispatch(actionCreators.userGender(data.aopt));
            dispatch(actionCreators.userType(data.role));
            localStorage.setItem("Type", role);
            
            let obj = {
                email: localStorage.getItem("email"),
                password: pass,
                fullname: data.fullname,
                mobileno: data.mobile,
                gender: data.aopt,
                role: role === "store" ? false : true
            };

            // Log the object for testing
            console.log(obj);

            // Example navigation logic based on role
            if (!obj.role) {
                navigate("/create-store");
            } else {
                navigate("/");
            }

            // Example API call
            AuthService.Details(obj)
                .then((res) => {
                    dispatch(UnsetLoader());
                    console.log(res);
                    localStorage.setItem("userid", res.data._id);
                })
                .catch((e) => {
                    dispatch(UnsetLoader());
                    console.log(e);
                });
        } else {
            alert("Choose Your Role");
        }
    };

    const imageHandler = (e) => {
        // Your image handling logic
    };

    const fileRef = useRef(null);

    return (
        <div className='Signup-Page'>
            <div className='Navbar-Signup'>
                <Navbar />
            </div>
            <div className='middle-portion'>
                <div className='first-portion'>
                    <div className='detail-heading'>
                        <p className='heading1'>Tell us something about yourself <span className='ques'>!</span></p>
                    </div>
                    <div className='role'>
                        <p className='heading2'>Select your Role</p>
                    </div>
                    <div className='images-role'>
                        <div className={`photo1 ${selectedRole === "customer" ? "selected" : ""}`}>
                            <div className='photo1-img'>
                                <img className="pic1" src={photo1} alt="Customer" />
                            </div>
                            <div className='photo1-role' onClick={() => { setRole("customer"); setSelectedRole("customer"); }}>
                                Customer
                            </div>
                        </div>
                        <div className={`photo2 ${selectedRole === "store" ? "selected" : ""}`}>
                            <div className='photo2-img'>
                                <img className="pic1" src={photo2} alt="Store" />
                            </div>
                            <div className='photo2-role' onClick={() => { setRole("store"); setSelectedRole("store"); }}>
                                Bank
                            </div>
                        </div>
                    </div>
                </div>
                <form className='second-portion' onSubmit={handleSubmit(onSubmit)}>
                    <div className='upload-user'>
                        <div className='user-img'>
                            <img className="pic2" src={photo3} alt="User" />
                        </div>
                        <div className='upload-btn'>
                            <input
                                hidden
                                ref={fileRef}
                                type={"file"}
                                accept="image/*"
                                onChange={imageHandler}
                            />
                            <button onClick={() => { fileRef.current.click(); }} className='upload-img-btn'>
                                <i id="plus" className="fa fa-plus" aria-hidden="true"></i> <span>Upload a profile pic</span>
                            </button>
                        </div>
                    </div>
                    <div className='input-login-field'>
                        <div className='fullname'>
                            <input className='input-field2' type="text" placeholder='Enter your full name' name="fullname" {...register("fullname", { required: "Name is required" })}></input>
                            <p className='alerts'>{errors.fullname?.message}</p>
                        </div>
                        <div className='mobile'>
                            <input className='input-field2' type="text" placeholder='Mobile Number' name="mobile" {...register("mobile", { required: "mobile number is required", pattern: { value: /^\d{9}$/, message: "The phone number should consist of 9 characters" } })}></input>
                            <p className='alerts'>{errors.mobile?.message}</p>
                        </div>
                    </div>
                    <div className='radio-btns'>
                        <div className='male-radio'>
                            <label className='label-data' htmlFor="field-male">
                                <input
                                    {...register("aopt", { required: "This field is required" })}
                                    type="radio"
                                    name="aopt"
                                    value="male"
                                    id="field-male"
                                />
                                Male
                            </label>
                        </div>
                        <div className='female-radio'>
                            <label className='label-data' htmlFor="field-female">
                                <input
                                    {...register("aopt", { required: "This field is required" })}
                                    type="radio"
                                    name="aopt"
                                    value="female"
                                    id="field-female"
                                />
                                Female
                            </label>
                        </div>
                        <div className='other-radio'>
                            <label className='label-data' htmlFor="field-other">
                                <input
                                    {...register("aopt", { required: "This field is required" })}
                                    type="radio"
                                    name="aopt"
                                    value="other"
                                    id="field-other"
                                />
                                Other
                            </label>
                        </div>
                        <p className='alerts'>{errors.aopt?.message}</p>
                    </div>
                    <button className='submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Details;
