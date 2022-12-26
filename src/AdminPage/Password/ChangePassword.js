import React from "react";

function ChangePassword() {
  return (
    <div>
      <div className="form-db-profile d-flex justify-content-center ">
        <div className="border border-success my-3">
          <div className="text-center border shadow">
            <h3>Change Password</h3>
          </div>
          <form className="mx-3 my-3">
            <table>
              <tr>
                <td>User Name</td>
                <td>
                  <input type="dropdown" value="ADMINISTRATOR" />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input type="password" />
                </td>
              </tr>
              <tr>
                <td>Confirm Password</td>
                <td>
                  <input type="password" />
                </td>
              </tr>
            </table>
            <div className="text-center my-3">
              <button className="btn btn-success mx-1" type="submit">
                Save
              </button>
              <button className="btn btn-danger mx-1" type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
