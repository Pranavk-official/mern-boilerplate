import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/AdminHome";
import AdminPrivateRoute from "./components/admin/AdminPrivateRoute";
import EditUser from "./pages/admin/EditUser";
import AddUser from "./pages/admin/AddUser";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<Login />} />

        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/edit/:id" element={<EditUser />} />
          <Route path="/admin/addUser" element={<AddUser />} />
        </Route>

        <Route path="/admin/addUser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
