import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../store/user/userSlice";

import { useNavigate } from "react-router-dom";

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Google login unsuccessfull");
    }
  };
  return (
    <>
      <div className="text-center text-sm italic text-gray-400">Or</div>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="btn w-full bg-gradient-to-t from-green-500 to-green-700 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
      >
        Continue with Google
      </button>
    </>
  );
}

export default OAuth;
