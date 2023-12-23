import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../Users/User.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./../../../Components/Firebase/Firebase.config";
import { AuthPovider } from "../../../Components/ContextAPI/ContextProvider";
import Swal from "sweetalert2";

const auth = getAuth(app);

function Resigstration() {
  const { FBSignIn, GoogleSignIn, TwitterSignIn } = useContext(AuthPovider);
  console.log(useContext(AuthPovider));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(formData);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        return Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };


  const SignUpHandler = (media) => {
    media()
      .then((res) => {
        const user = res.user;
        console.log(user);
        return Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.error("Firebase error:", error);
        return Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className={login.loginContainer}>
      <h2 className={login.title}>Sign Up</h2>
      <form className={login.form} onSubmit={handleSubmit}>
        <div className={login.formGroup}>
          <label className={login.label}>Username:</label>
          <input
            className={login.input}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={login.formGroup}>
          <label className={login.label}>Email:</label>
          <input
            className={login.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={login.formGroup}>
          <label className="label">Password:</label>
          <input
            className={login.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={login.formGroup}>
          <label className="label">Confirm Password:</label>
          <input
            className={login.input}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className={login.button} type="submit">
          Sign Up
        </button>

        <div className={login.authentication}>
          <a
            onClick={() => SignUpHandler(FBSignIn)}
            className={login.link}
            href="#facebook"
          >
            <img
              className={login.auth}
              src={"/src/assets/image/facebook.png"}
              alt=""
            />
          </a>
          <a
            onClick={() => SignUpHandler(GoogleSignIn)}
            className={login.link}
            href="#facebook"
          >
            <img
              className={login.auth}
              src={"/src/assets/image/google.png"}
              alt=""
            />
          </a>
          <a
            onClick={() => SignUpHandler(TwitterSignIn)}
            className={login.link}
            href="#facebook"
          >
            <img
              className={login.auth}
              src={"/src/assets/image/twitter.png"}
              alt=""
            />
          </a>
        </div>
      </form>
      <div className={login.backBtn}>
        <button className={login.btn} onClick={() => navigate(-1)}>
          Back
        </button>
        <span style={{ color: "red" }}>Or</span>
        <button className={login.btn} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default Resigstration;
