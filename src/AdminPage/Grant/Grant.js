import React from "react";

function Grant() {
  return (
    <div className="form-db-profile d-flex justify-content-center ">
      <form className="border my-2">
        <div className="text-center">
          <h3>Grant</h3>
        </div>

        <table className="mx-2 my-2">
          <tbody>
            <tr>
              <td>
                <input type="radio" id="radio1" name="sysDba" />
                <label for="radio1">SYSDBA</label>
              </td>
              <td>
                <input type="radio" id="radio2" name="sysDba" />
                <label for="radio2">Default</label>
              </td>
            </tr>
            <tr>
              <td>DB Profile Type</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>DB Profile </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="text-danger">SYSDBA USER </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Password </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Grantee User </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Grantee Filename </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center my-4">
          <button className="btn btn-success mx-2">submit</button>
          <button className="btn btn-danger mx-2">reset</button>
        </div>
      </form>
    </div>
  );
}

export default Grant;
