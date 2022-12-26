import React from "react";
import { useState } from "react";
import axios from "axios";

function NewGroups() {
  //initial values
  const initialValues = {
    groupName: "",
    description: "",
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

    let GroupData = {
      groupName: e.target.groupName.value,
      description: e.target.description.value,
    };
    axios
      .post("/newGroup", GroupData)
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
    <div>
      <div className="form-db-profile d-flex justify-content-center ">
        <div>
          <form className="border border-success my-2" onSubmit={handleSubmit}>
            <div className="text-center  shadow">
              <h3>New Groups</h3>
            </div>
            <table className=" justify-content-center mx-3 my-3 ">
              <tbody>
                <tr>
                  <td>Group Name : </td>
                  <td>
                    <input
                      type="text"
                      name="groupName"
                      value={formValues.groupName}
                      id="profile_Name"
                      placeholder="Profile Name"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    <textarea
                      type="text"
                      name="description"
                      value={formValues.description}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center my-3">
              <button className="btn btn-success mx-1" type="submit">
                Save
              </button>
              <button
                className="btn btn-danger mx-1"
                type="reset"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewGroups;
