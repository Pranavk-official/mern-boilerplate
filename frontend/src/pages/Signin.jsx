import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
} from "../store/user/userSlice.js";
import { toast } from "react-toastify";
import Header from "../components/auth/Header.jsx";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        toast.error(data.message, {
          autoClose: 500,
          hideProgressBar: true,
        });
        return;
      }
      dispatch(updateUserSuccess(data));
      navigate("/");
    } catch (err) {
      dispatch(updateUserFailure(err.message));
    }
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem]">
          <div className="px-4 sm:px-6">
            <div className="mx-auto w-full max-w-sm">
              <div className="py-16 md:py-20">
                <div className="max-w-md mx-auto p-6">
                  <div className="mb-10">
                    <h1 className="text-4xl font-bold">
                      Sign in to your account
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className="mb-1 block text-sm font-medium text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        className="form-input w-full py-2"
                        type="email"
                        placeholder="corybarker@email.com"
                        required
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1 block text-sm font-medium text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        className="form-input w-full py-2"
                        type="password"
                        autoComplete="on"
                        placeholder="••••••••"
                        required
                        onChange={handleChange}
                        value={formData.password}
                      />
                    </div>
                    <div className="mt-6">
                      <button
                        disabled={loading}
                        className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom]
                        text-white shadow hover:bg-[length:100%_150%] disabled:opacity-80"
                      >
                        {loading ? "Loading..." : "Sign In"}
                      </button>
                    </div>
                  </form>

                  <div className="mt-6 text-center">
                    <Link
                      className="text-sm text-gray-700 underline hover:no-underline"
                      to="/reset-password"
                    >
                      Forgot password
                    </Link>
                  </div>
                  <div className="flex gap-2 mt-4 justify-center">
                    <p>Don't have an account?</p>
                    <Link to="/sign-up">
                      <span className="text-blue-500">Sign up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
