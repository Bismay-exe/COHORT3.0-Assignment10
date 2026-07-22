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

  let registerFormSubmit = (data) => {
    let userExists = registeredUsers.find((val) => val.email === data.email);
    if (userExists) {
        toast.error("User with this email already exists!");
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
    
    toast.success("User registered successfully!");
    navigate("/");

    reset();
  };

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
