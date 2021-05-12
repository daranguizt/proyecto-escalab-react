import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "eli@hehe.net",
    password: "elieli",
  };
  const [disableButton, setDisableButton] = useState(false);
  const [formValues, handleInputChange] = useForm(initialState);

  const { email, password } = formValues;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableButton(true);
    dispatch(startLogin(email, password)).then((isLoginSuccessful) => {
      setDisableButton(isLoginSuccessful);
    });
  };

  return (
    <div className="auth__screen animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit} className="auth__box">
        <h2>Login</h2>
        <input
          className="auth__input"
          onChange={handleInputChange}
          type="text"
          name="email"
          value={email}
          placeholder="Email"
        />
        <input
          className="auth__input"
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />
        <button
          disabled={disableButton}
          type="submit"
          className="btn btn-primary auth__login-button"
        >
          Login
        </button>

        <button>Google Login</button>
      </form>
    </div>
  );
};
