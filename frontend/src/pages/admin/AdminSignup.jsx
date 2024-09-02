import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminSignup } from "../../store/admin/adminSlice";
import Header from "../../components/auth/Header";

export default function AdminSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
        return;
      }
      dispatch(adminSignup(data));
      navigate("/admin");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem] mt-0">
          <div className="px-4 sm:px-6">
            <div className="mx-auto w-full max-w-sm">
              <div className="py-16 md:py-20">
                <div className="max-w-md mx-auto p-6 pt-0">
                  <div className="mb-10">
                    <h1 className="text-4xl font-bold">Create Admin Account</h1>
                  </div>

                  {error && (
                    <p className="text-red-700 mt-5 mb-5 font-semibold">
                      {error}
                    </p>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-700"
                          htmlFor="name"
                        >
                          Admin Name
                        </label>
                        <input
                          id="name"
                          className="form-input w-full py-2"
                          type="text"
                          placeholder="Admin Name"
                          required
                          onChange={handleChange}
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
                        />
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <button
                        className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Register Admin"}
                      </button>
                    </div>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      By signing up, you agree to the{" "}
                      <Link
                        to="#"
                        className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="#"
                        className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4 ml-5">
                    <p>Already have an admin account?</p>
                    <Link to="/admin">
                      <span className="text-blue-500">Sign in</span>
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
