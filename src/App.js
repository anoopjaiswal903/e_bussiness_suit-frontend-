import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteDatabase from "./AdminPage/DataBaseProfile/DeleteDatabase";
import ModifyDatabase from "./AdminPage/DataBaseProfile/ModifyDatabase";
import NewDatabase from "./AdminPage/DataBaseProfile/NewDatabase";
import Grant from "./AdminPage/Grant/Grant";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import NewGroups from "./AdminPage/Groups/NewGroups";
import NewUsers from "./AdminPage/Users/NewUsers";
import ModifyUsers from "./AdminPage/Users/ModifyUsers";
import DeleteUsers from "./AdminPage/Users/DeleteUsers";
import ViewJob from "./AdminPage/Jobs/ViewJob";
import PurgeJob from "./AdminPage/Jobs/PurgeJob";
import ChangePassword from "./AdminPage/Password/ChangePassword";
import ModifyGroup from "./AdminPage/Groups/ModifyGroup";
import DeleteGroup from "./AdminPage/Groups/DeleteGroup";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/newDatabase" element={<NewDatabase />} />
          <Route path="/modifyDatabase" element={<ModifyDatabase />} />
          <Route path="/deleteDatabase" element={<DeleteDatabase />} />
          <Route path="/grant" element={<Grant />} />
          <Route path="/newGroups" element={<NewGroups />} />
          <Route path="/modifyGroup" element={<ModifyGroup />} />
          <Route path="/deleteGroup" element={<DeleteGroup />} />
          <Route path="/newUsers" element={<NewUsers />} />
          <Route path="/modifyUsers" element={<ModifyUsers />} />
          <Route path="/deleteUsers" element={<DeleteUsers />} />
          <Route path="/viewJob" element={<ViewJob />} />
          <Route path="/purgeJob" element={<PurgeJob />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
