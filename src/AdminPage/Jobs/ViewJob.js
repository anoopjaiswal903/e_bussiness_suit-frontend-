import React from "react";

function ViewJob() {
  return (
    <div>
      <div className="text-center border mb-2 ">
        <h4>View Jobs</h4>
      </div>
      <table className="container border shadow">
        <thead className="text-center border">
          <th scope="col">Date Submitted</th>
          <th scope="col">Job Name</th>
          <th scope="col">Status</th>
          <th scope="col">Job Profile</th>
          <th scope="col">User</th>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>12/11/2022</td>
            <td>abc</td>
            <td>active</td>
            <td>add</td>
            <td>anoop</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewJob;
