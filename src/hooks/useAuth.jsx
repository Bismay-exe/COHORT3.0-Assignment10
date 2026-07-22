import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

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

  // login logic
  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("Invalid credentials or user not found!");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success("Successfully logged in!");
    reset();
    navigate("/");
  };

  // register logic
  let registerFormSubmit = (data) => {
    // Check if user exists
    let userExists = registeredUsers.find((val) => val.email === data.email);
    if (userExists) {
        toast.error("User with this email already exists!");
        return;
    }

    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    setLoggedInUser(data);
    localStorage.setItem("loggedinUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    
    toast.success("User registered successfully!");
    navigate("/");

    reset();
  };

  // logout logic
  let logoutUser = () => {
    localStorage.removeItem("loggedinUser");
    setLoggedInUser(null);
    toast.success("Logged out successfully");
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
  };
};
