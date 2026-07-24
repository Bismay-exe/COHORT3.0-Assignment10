import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { HandMetal, TriangleAlert } from "lucide-react";

export const useAuth = () => {
  const { registeredUsers, loggedInUser, setLoggedInUser, setRegisteredUsers } =
    useContext(Auth);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
            } max-w-md bg-(--red-bg) backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-(--red) ring-opacity-5 p-4`}
        >
          <div className="shrink-0 pt-0.5 flex items-center gap-2 text-(--red) font-inter font-semibold">
            <TriangleAlert size={20} className="fill-(--red-bg)" />Invalid credentials or user not found!
          </div>
        </div>
      ))
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
          } max-w-md bg-green-500 backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-green-500 ring-opacity-5 p-4`}
      >
        <div className="shrink-0 pt-0.5 flex items-center gap-2 text-green-200 font-inter font-semibold">
          <HandMetal size={20} className="fill-green-200" />Welcome Back {user.name} !
        </div>
      </div>
    ))
    reset();
    navigate("/");
  };

  let registerFormSubmit = (data) => {
    let userExists = registeredUsers.find((val) => val.email === data.email);
    if (userExists) {
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
            } max-w-md bg-(--yellow-bg) backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-(--border-color) ring-opacity-5 p-4`}
        >
          <div className="shrink-0 pt-0.5 flex items-center gap-2 text-(--yellow) font-inter font-semibold">
            <TriangleAlert size={20} className="fill-(--yellow-bg)" />User with this email already exists!
          </div>
        </div>
      ))
      return;
    }

    const newUser = {
      ...data,
      cart: [],
      wishlist: []
    };

    let arr = [...registeredUsers, newUser];

    setRegisteredUsers(arr);
    setLoggedInUser(newUser);
    localStorage.setItem("loggedinUser", JSON.stringify(newUser));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));

    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
          } max-w-md bg-green-500 backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-green-500 ring-opacity-5 p-4`}
      >
        <div className="shrink-0 pt-0.5 flex items-center gap-2 text-green-200 font-inter font-semibold">
          <HandMetal size={20} className="fill-green-200" />User registered successfully!
        </div>
      </div>
    ))
    navigate("/");

    reset();
  };

  let logoutUser = () => {
    localStorage.removeItem("loggedinUser");
    setLoggedInUser(null);
    toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
            } max-w-md bg-(--red-bg) backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-(--red) ring-opacity-5 p-4`}
        >
          <div className="shrink-0 pt-0.5 flex items-center gap-2 text-(--red) font-inter font-semibold">
            <TriangleAlert size={20} className="fill-(--red-bg)" />Logged out Successfully
          </div>
        </div>
      ))
    navigate("/auth/login");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
    logoutUser,
    loggedInUser,
  };
};
