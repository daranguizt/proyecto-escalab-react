import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startRegister } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [disableButton, setDisableButton] = useState(false);
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, confirmPassword } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableButton(true);
    dispatch(startRegister({ name, email, password })).then(
      (isRegisterSuccessful) => {
        setDisableButton(isRegisterSuccessful);
      }
    );
  };

  return (
    <div className="auth__screen animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit} className="auth__box">
        <h2>Sign Up with Us!</h2>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          className="auth__input"
        />
        <input
          onChange={handleInputChange}
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          className="auth__input"
        />
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          className="auth__input"
        />
        <input
          onChange={handleInputChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          className="auth__input"
        />
        <button
          disabled={disableButton}
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
    </div>
  );
};
