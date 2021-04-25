import React from "react";
import {useDispatch} from 'react-redux';
import { useForm } from "../../hooks/useForm";
import {startLogin} from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "eli@hehe.net",
    password: "elipipi",
  };
  const [formValues, handleInputChange] = useForm(initialState);

  const { email, password } = formValues;
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(startLogin(email, password));
  };

  return (
    <div>
      <h1>This is the Login Screen</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="email"
          value={email}
          placeholder="Email"
        />
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />
        <button type="submit">
            Login
        </button>
      </form>
    </div>
  );
};
