import React, { useState } from "react";
import illustrate from '../../Assets/logo2.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import englishFlag from "../../Assets/english-flag.png";
import portugueseFlag from "../../Assets/portuguese-flag.png";
import frenchFlag from "../../Assets/french-flag.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

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

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className='Navbar'>
      <div className='logo' onClick={logoClick}>
        <div className='logo-image'>
          <img className="image" src={illustrate} alt="logo" />
        </div>
        <div className='logo-head'>
          <p>StandardBank</p>
        </div>
      </div>
      <div className='Nav-menu'>
        <div className='qr-code' onClick={qrScan}>
          <i className="fa fa-qrcode" aria-hidden="true" style={{ color: "white", fontSize: "2.2em", cursor: "pointer" }}></i>
        </div>
        <div className='language-dropdown'>
          <div className="dropdown">
            <button className="dropbtn">
              <img
                src={
                  language === "English"
                    ? englishFlag
                    : language === "Portuguese"
                      ? portugueseFlag
                      : frenchFlag
                }
                alt={language}
                className="flag"
              />
              {language} <IoMdArrowDropdown />
            </button>
            <div className="dropdown-content">
              <div onClick={() => changeLanguage("English")}>
                <img src={englishFlag} alt="English" className="flag" /> English
              </div>
              <div onClick={() => changeLanguage("Portuguese")}>
                <img src={portugueseFlag} alt="Portuguese" className="flag" /> Portuguese
              </div>
              <div onClick={() => changeLanguage("French")}>
                <img src={frenchFlag} alt="French" className="flag" /> French
              </div>
            </div>
          </div>
        </div>
        <div className='sign-out' onClick={signingOut}>
          <i className="fa fa-sign-out" aria-hidden="true" style={{ color: "white", fontSize: "2.2em", cursor: "pointer" }}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
