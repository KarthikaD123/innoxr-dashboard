import "./Login.css";
import hero from "../assets/hero.png";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye
} from "react-icons/fa";

const Login = () => {

  const navigate = useNavigate();

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowCard(true);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  const handleLogin = () => {

    navigate("/dashboard");

  };

  return (

    <div className="login-page">

      <div className="overlay"></div>

      <div className="hero-section">

        <div className="left">

          <h1 className="logo-animation">

            Inno<span>XR</span>

          </h1>

          <p className="tagline-animation">

            XR Device Management Platform

          </p>

          <div
            className={`login-card ${
              showCard ? "show-card" : "hide-card"
            }`}
          >

            <h2>Welcome Back!</h2>

            <p className="subtitle">
              Sign in to continue to your account
            </p>

            <label>Email</label>

            <div className="input-box">

              <FaEnvelope />

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

            <label>Password</label>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Enter your password"
              />

              <FaEye className="eye" />

            </div>

            <div className="row">

              <label className="remember">

                <input type="checkbox" />

                Remember me

              </label>

              <a href="/">
                Forgot Password?
              </a>

            </div>

            <button
              className="login-btn"
              onClick={handleLogin}
            >

              Login →

            </button>

            <div className="divider">

              <span>OR</span>

            </div>

            <button className="google-btn">

              <FaGoogle />

              Continue with Google

            </button>

            <p className="signup">

              Don't have an account?

              <span
                onClick={() => navigate("/register")}
              >

                Sign Up

              </span>

            </p>

          </div>

        </div>

        <div className="right">

          <img
            src={hero}
            alt="Hero"
          />

        </div>

      </div>

      <footer>

        © 2026 InnoXR. All rights reserved.

      </footer>

    </div>

  );

};

export default Login;