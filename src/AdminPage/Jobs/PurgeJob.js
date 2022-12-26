import React from "react";

function PurgeJob() {
  return (
    <div>
      <div className="form-db-profile d-flex justify-content-center ">
        <div className="border border-success my-3">
          <div className="text-center border shadow">
            <h3>Purge Job</h3>
          </div>
          <form className="mx-3 my-3">
            <table>
              <tr>
                <td>User Id</td>
                <td>
                  <input type="dropdown" placeholder="select from list " />
                </td>
              </tr>
              <tr>
                <td>Days to Keep</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </table>
            <div className="text-center my-3">
              <button className="btn btn-success mx-1" type="submit">
                Submit
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

export default PurgeJob;
