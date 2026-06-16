import { useState } from "react";
import axios from "axios";
import { SuccessNotifications } from "../components/Notification";
import { ErrorNotification } from "../components/ErrorNotification";

const SignUp = () => {
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const [notification , setNotification] = useState(false)
  const [login , setLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });
  const[loginData , setLoginData] = useState({
    email:"",
    password: ""
  });
  const[loading , setLoading] = useState(false)
  const[errorNotification , setErrorNotification] = useState(false)


  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
       setLoading(true);
      const response = await axios.post(
        `${backendurl}/user/api/signup`,
        formData,
        { withCredentials: true }   // cookie receive karne ke liye zaroori
      );
      
      console.log(response.data);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 2000);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
      });
    } catch (error) {
      console.error(error.response?.data || error.message);
      setErrorNotification(true);
      setTimeout(() => {
        setErrorNotification(false);
      }, 2000);
    } finally {
      setLoading(false)
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const res = await axios.post(`${backendurl}/user/api/login`, loginData, {
        withCredentials: true,
      });
      console.log(res.data);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 2000);
      setLoginData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.response?.data || error.message);
       setErrorNotification(true);
      setTimeout(() => {
        setErrorNotification(false);
      }, 2000);
    }finally {
      setLoading(false)
    }
  };

  const handleLoginChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  
   
  return (
    <>
      <div className="relative top-10 left-10 ">
        {notification ? (<SuccessNotifications />) : ("")}
      </div>
  <div className="relative top-10 left-10 ">
        {errorNotification ? (<ErrorNotification />) : ("")}
      </div>
      {login ? (
        <div className="flex items-center bg-transparent justify-center min-h-screen">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4 w-96 p-6 border rounded-lg shadow"
          >
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="text"
              name="contact"
              placeholder="Enter Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <button type="submit" className="bg-black text-white p-2 rounded">
              {loading ? ( <> loading... </>) : "Submit"}
            </button>

            <div className="flex gap-2">
              <div>Already have an account?</div>
              <div className="text-blue-800 hover:underline" onClick={handleLogin}>
                Login
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center bg-transparent justify-center min-h-screen">
          <form
            onSubmit={submitLogin}
            className="flex flex-col gap-4 w-96 p-6 border rounded-lg shadow"
          >
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="border p-2 rounded"
              required
            />

            <button type="submit" className="bg-black text-white p-2 rounded">
              {loading ? ( <> loading... </>) : "Submit"}
            </button>

            <div className="flex gap-2">
              <div>Don't have an account?</div>
              <div className="text-blue-800 hover:underline" onClick={handleLogin}>
                Sign up
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default SignUp;