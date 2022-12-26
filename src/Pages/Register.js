import React from "react";
import { useState } from "react";
import axios from "axios";

function Register() {
  //initial values
  const initialValues = {
    userName: "",
    password: "",
    role: "",
  };

  //creating state for formValues
  const [formValues, setFormValues] = useState(initialValues);

  //Function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //function for submit the form  values
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);

    console.log(formValues);

    let UserModel = {
      userName: e.target.userName.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };
    axios
      .post("/register", UserModel)
      .then((response) => {
        console.log(response);
        alert("Registration Successful");
      })
      .catch((error) => {
        console.log(error);
        alert("Registration Failed");
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center ">
        <form className="border mt-3" onSubmit={handleSubmit}>
          <div className="text-center mt-3">
            <h3>REGISTER</h3>
          </div>

          <table className="mx-3 my-3">
            <tbody>
              <tr>
                <td>USERNAME</td>
                <td>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formValues.userName}
                  />
                </td>
              </tr>
              <tr>
                <td>EMAIL</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="EMAIL"
                    onChange={handleChange}
                    value={formValues.email}
                  />
                </td>
              </tr>
              <tr>
                <td>PASSWORD</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formValues.password}
                  />
                </td>
              </tr>
              <tr>
                <td>MATCHING PASSWORD</td>
                <td>
                  <input
                    type="password"
                    name="matchingPassword"
                    placeholder="Matching Password"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formValues.matchingPassword}
                  />
                </td>
              </tr>
              <tr>
                <td>ROLE</td>
                <td>
                  <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formValues.role}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-2">
            <button type="submit" className="btn btn-success mx-1">
              Register
            </button>
            <button type="reset" className="btn btn-danger mx-1">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
