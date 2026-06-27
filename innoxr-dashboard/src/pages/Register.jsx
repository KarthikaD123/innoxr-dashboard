import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {

  const navigate = useNavigate();

  const handleRegister = () => {

    alert("Account Created Successfully!");

    navigate("/");
  };

  return (

    <div className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>

        <p>Create your InnoXR account</p>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button onClick={handleRegister}>
          Create Account
        </button>

        <p>

          Already have an account?

          <span
            onClick={() => navigate("/")}
          >

            Login

          </span>

        </p>

      </div>

    </div>

  );

}

export default Register;