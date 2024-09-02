import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/user/userSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signout());
      navigate("/sign-in");
      toast.success("Sign Out Successful", {
        className: "text-green-600",
        autoClose: 1000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {currentUser ? (
              <>
                <li>
                  <Link to="/profile">
                    <img
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  </Link>
                </li>
                <li
                  onClick={handleSignOut}
                  className="text-red-600 font-bold cursor-pointer"
                >
                  Sign Out
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/sign-in"
                    className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-up"
                    className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
