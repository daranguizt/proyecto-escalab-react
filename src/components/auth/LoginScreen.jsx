import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "eli@hehe.net",
    password: "elieli",
  };
  const [formValues, handleInputChange] = useForm(initialState);

  const { email, password } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div className="auth__screen ">
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
        <button type="submit" className="btn btn-primary" id="loginButton">
          Login
        </button>

        <button>Google Login</button>
      </form>
    </div>
  );
};
