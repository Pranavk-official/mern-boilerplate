import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/auth/Header";
import { useSelector } from "react-redux";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (err) {
      setLoading(false);
      setError(true);
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
                    <h1 className="text-4xl font-bold">Create your account</h1>
                  </div>

                  {error && (
                    <p className="text-red-700 mt-5 mb-5 font-semibold">
                      Username already exists
                    </p>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-700"
                          htmlFor="username"
                        >
                          username
                        </label>
                        <input
                          id="username"
                          className="form-input w-full py-2"
                          type="text"
                          placeholder="UserName"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-700"
                          htmlFor="name"
                        >
                          Full name
                        </label>
                        <input
                          id="name"
                          className="form-input w-full py-2"
                          type="text"
                          placeholder="Corey Barker"
                          required
                          onChange={handleChange}
                        />
                      </div>
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
                        />
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-700"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          className="form-input w-full py-2"
                          type="text"
                          placeholder="(+750) 932-8907"
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
                        {loading ? "Loading..." : "Register"}
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
                    <p>Have an account?</p>
                    <Link to="/sign-in">
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
