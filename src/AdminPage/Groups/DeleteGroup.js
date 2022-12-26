import React from "react";

function DeleteGroup() {
  return (
    <div>
      <div className="form-db-profile d-flex justify-content-center ">
        <div>
          <form className="border border-success my-2">
            <div className="text-center  shadow">
              <h3>Delete Groups</h3>
            </div>
            <table className=" justify-content-center mx-3 my-3 ">
              <tbody>
                <tr>
                  <td>Group Name : </td>
                  <td>
                    <input
                      type="text"
                      id="profile_Name"
                      placeholder="Select Group Name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    <textarea></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center my-3">
              <button className="btn btn-success mx-1">Save</button>
              <button className="btn btn-danger mx-1">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteGroup;
