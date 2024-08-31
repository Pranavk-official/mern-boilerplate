import { Link, useNavigate } from "react-router-dom";
import { adminLogout } from "../../store/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AdminHeader() {
  const { admin } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await fetch("/api/admin/logout");
      dispatch(adminLogout());
      navigate("/admin");
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
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <Link to="/">
          <h1 className="text-xl font-semibold">User Management</h1>
        </Link>
      </div>
      <nav className="flex-1 px-2 py-4">
        <Link
          to="/admin/home"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-300 rounded-lg hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/home"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-300 rounded-lg hover:bg-gray-700"
        >
          Users
        </Link>
        {/* Add more nav items here */}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <span className="text-sm font-medium">
            {admin ? admin.name : "Admin"}
          </span>
        </div>
        <button
          onClick={handleLogOut}
          className="mt-2 w-full text-sm text-gray-400 hover:text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
