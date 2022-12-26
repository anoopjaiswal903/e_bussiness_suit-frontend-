import React from "react";

function ModifyDatabase() {
  return (
    <div>
      <div>
        <div className="form-db-profile d-flex justify-content-center ">
          <div>
            <form className="border border-success my-2">
              <div className="text-center  shadow">
                <h3>Modify Database Profile</h3>
              </div>
              <table className=" justify-content-center mx-3 my-3 ">
                <tbody>
                  <tr>
                    <td>Profile Name : </td>
                    <td>
                      <input
                        type="text"
                        id="profile_Name"
                        placeholder="Profile Name"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <input
                        type="radio"
                        id="configureNAA"
                        value="configureNAA"
                        name="configureNAA"
                      />
                      <label for="configureNAA">configure NAA</label>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <input
                        type="radio"
                        id="configureNAA"
                        value="configureNAA"
                        name="configureNAA"
                      />
                      <label for="configureNAA">
                        Designated as Archive Database
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Username</td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>
                      <input type="Password" />
                    </td>
                  </tr>

                  <tr></tr>

                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="ConnectOption"
                        id="ConnectOption1"
                      />
                      <label for="ConnectOption1">Connect Option 1</label>
                    </td>
                    <td>
                      <tr>Server Name OR IP address</tr>
                      <tr>
                        <input type="text"></input>
                      </tr>
                      <tr>SID</tr>
                      <tr>
                        <input type="text"></input>
                      </tr>
                      <tr>Port Number</tr>
                      <tr>
                        <input type="text"></input>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="ConnectOption"
                        id="ConnectOption2"
                      />
                      <label for="ConnectOption2">Connect Option 2</label>
                    </td>
                    <td>
                      <tr>Connect Descriptor</tr>
                      <tr>
                        <input type="text"></input>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <button className="btn btn-success mx-1">Create User</button>
                <button className="btn btn-danger mx-1">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyDatabase;
