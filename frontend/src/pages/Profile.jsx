import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../store/user/userSlice";

import { toast } from "react-toastify";
import Header from "../components/ui/Header";

function Profile() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        toast.error("Update not successfull");
        return;
      }

      dispatch(updateUserSuccess(data));
      toast.success("User updated Successfully", {
        autoClose: 500,
        className: "text-green-600",
        hideProgressBar: true,
      });
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  return (
    <>
      <Header />
      <div className="p-3 max-w-lg mx-auto m-20">
        <h1 className="text-3xl text-slate-700 font-semibold text-center my-7 ">
          Profile
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <img
            src={formData.profilePicture || currentUser.profilePicture}
            className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          />

          <input
            defaultValue={currentUser.username}
            type="text"
            id="username"
            placeholder="Username"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleChange}
          />
          <input
            defaultValue={currentUser.email}
            type="email"
            id="email"
            placeholder="Email"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleChange}
          />
          <button className="bg-slate-600 text-white rounded-lg uppercase hover:opacity-85 disabled:opacity-80 max-w-lg p-2  my-2">
            Update
          </button>
        </form>

        <p className="text-red-700 mt-5">{error && "Something went wrong"}</p>
      </div>
    </>
  );
}
export default Profile;
