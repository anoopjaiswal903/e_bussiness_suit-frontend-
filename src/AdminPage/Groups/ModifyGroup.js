import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ModifyGroup() {
  const { id } = useParams();

  //initialize the initial value
  const initialValues = {
    groupName: "",
    description: "",
  };

  //creating state for formValues
  const [FormValue, setFormValue] = useState(initialValues);

  //function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...FormValue, [name]: value });
    console.log(FormValue);
  };

  //function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormValue);

    const group = {
      groupName: FormValue.groupName,
      description: FormValue.description,
    };

    axios
      .put(`/modify/${id}`, group)
      .then((response) => {
        console.log(response.data);
        alert("update success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //for getting data from the server
  const loadUser = () => {
    axios
      .get(`/user/${id}`)
      .then((response) => {
        setFormValue(response);
        alert("load user success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //data will load on every page render
  useEffect(() => {
    loadUser();
  }, []);

  //Function to reset form value
  const reset = () => {
    setFormValue({ ...initialValues });
  };

  return (
    <div>
      <div className="form-db-profile d-flex justify-content-center ">
        <div>
          <form className="border border-success my-2" onSubmit={handleSubmit}>
            <div className="text-center  shadow">
              <h3>Modify Groups</h3>
            </div>
            <table className=" justify-content-center mx-3 my-3 ">
              <tbody>
                <tr>
                  <td>Group Name : </td>
                  <td>
                    <input
                      type="text"
                      id="profile_Name"
                      value={FormValue.name}
                      placeholder="Select Group Name"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    <textarea
                      type="text"
                      id="profile_Description"
                      name="description"
                      value={FormValue.description}
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
              <button className="btn btn-danger mx-1" onClick={reset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModifyGroup;
