import React from "react";

function ModifyUsers() {
  return (
    <div>
      <div className="form-db-profile d-flex justify-content-center ">
        <div className="border border-success my-3">
          <form className="mx-3 my-3">
            <div className="text-center  shadow">
              <h3>Modify User</h3>
            </div>
            <table>
              <tr>
                <td>User Name</td>
                <td>
                  <input type="text" placeholder="select from dropdown" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="grantAuthority"
                    name="grantAuthority"
                  />
                </td>
                <td>
                  <label for="grantAuthority">
                    grant administrator authority
                  </label>
                </td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>
                  <input type="email"></input>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>Available Group</td>
                <td>
                  <input
                    type="dropdown"
                    placeholder="select from dropdown"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Assigned Group</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
            </table>
            <div className="text-center my-3">
              <button className="btn btn-success mx-2" type="submit">
                Save
              </button>
              <button className="btn btn-danger mx-2" type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModifyUsers;
