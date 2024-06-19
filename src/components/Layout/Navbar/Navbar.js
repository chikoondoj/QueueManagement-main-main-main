import React from 'react';
import illustrate from '../../Assets/logo1.svg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const signingOut = () => {
        localStorage.clear();
        navigate("/login");
    }

    const qrScan = () => {
        navigate("/qrcode");
    }

    const logoClick = () => {
        navigate("/");
    }

    return (
        <div className='navbar'>
            <div className='logo' onClick={logoClick}>
                <img className="logo-image" src={illustrate} alt="logo" />
                <p className='logo-head'>QJ&P</p>
            </div>
            <div className='nav-menu'>
                <i className="fa fa-qrcode nav-icon" aria-hidden="true" onClick={qrScan}></i>
                <i className="fa fa-sign-out nav-icon" aria-hidden="true" onClick={signingOut}></i>
            </div>
        </div>
    );
}

export default Navbar;
