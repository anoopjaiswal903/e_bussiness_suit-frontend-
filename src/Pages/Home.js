import React from "react";
import "./home.css";
import javaCompatibleImage from "../Images/javaCompatible.png";
import OracleCertified from "../Images/OracleCertAdv.gif";
import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

function Home() {
  //initial values
  const initialValues = {
    userName: "",
    password: "",
  };

  //states for formValues
  const [formValues, setFormValues] = useState(initialValues);

  //Function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  //function for submit the form  values
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);

    let GroupData = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    axios
      .post("/register", GroupData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = () => {
    setFormValues({ ...initialValues });
  };

  return (
    <>
      <div className="homepage">
        {/* NAVBAR */}
        <div className="navbar  shadow">
          <h3 className="mx-3">EBS</h3>
        </div>
        {/* BODY */}
        <div className="body">
          <div className="container containerDesign border ">
            <div className="mt-2 text-center">
              <h3 className="heading my-4 ">
                IBM InfoSphere Optim Data Growth Solution for Oracle E-Business
                Suite
              </h3>
            </div>
            <div className="d-flex justify-content-around mt-3">
              <div className="ebs-details col-6 border">
                <p className="border mx-2 mt-4">
                  IBM InfoSphere Optim Data Growth Solution for Oracle
                  E-Business Suite is a single, scalable solution that allows
                  you to manage your Oracle data at the business object level
                  such as invoices, journals or pay statements. You can also
                  apply functional polices to segregate inactive application
                  data from current activity and safely move it to a secure
                  archive. The solution allows you to consistently satisfy
                  service levels and increase profitability by aligning Oracle
                  E-Business Suite performance with business processes. Now you
                  can quickly respond to audit and discovery requests with query
                  or self-help access to standalone archives.
                </p>
              </div>

              <div className="login-form col-3  border border-dark rounded my-2 ">
                <div>
                  <form className="mx-3 my-2" onSubmit={handleSubmit}>
                    <div>
                      <header className="text-center">
                        <h5>LOGIN</h5>
                      </header>
                    </div>
                    <div className="field mb-2">
                      <label>USERNAME</label>
                      <input
                        type="text"
                        name="userName"
                        pattern="[a-zA-Z]{4,}"
                        required
                        title="ENTER ONLY ALFABETS"
                        placeholder="Username"
                        className="form-control"
                        autoComplete="off"
                        value={formValues.userName}
                        onChange={handleChange}
                      />
                      <p className="mt-1 text-center"></p>
                    </div>
                    <div className="field mb-2">
                      <label>PASSWORD</label>
                      <input
                        type="password"
                        name="password"
                        required
                        title="ENTER STRONG PASSWORD"
                        placeholder="Password"
                        className="form-control"
                        autoComplete="off"
                        value={formValues.password}
                        onChange={handleChange}
                      />
                      <p className="mt-1 text-center"></p>
                    </div>

                    <div className="text-center">
                      <button
                        className="btn btn-primary mx-1 text-center"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        LOGIN
                      </button>
                      <button
                        className="btn btn-danger mx-1 text-center"
                        type="reset"
                        onClick={reset}
                      >
                        RESET
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="images d-flex  justify-content-start mt-5 border col-6">
              <div className="javaCompatibleImage">
                <img src={javaCompatibleImage} alt="no images"></img>
              </div>
              <div className="OracleCertifiedImage d-flex align-items-end">
                <img
                  src={OracleCertified}
                  className="d-flex align-items-end"
                  alt="no images"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="footer text-center d-flex border border-success ">
          <div className="align-items-center ">
            <p className="font-weight-light footerParagraph mx-4 ">
              Licensed Material - Property of IBM Corp. © Copyright,
              International Business Machines, 1996-2020. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
