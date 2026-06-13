import { useState } from "react";
import axios from "axios";
export function SignUp() {
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const sumbitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password, number, name };
    const response = await axios.post(`${backendurl}/user/api/signup`, data);
    console.log(response);
  };

  return (
    <div>
      <h1>Form</h1>
      <div className="flex iteblue-500nter w-full ">
     <form action="/" className="flex flex-cols">
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            className
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input
            type="number"
            placeholder="number"
            name=""
            id=""
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />

          <button type="submit" className="bg-black text-amber-50" onSubmit={sumbitHandler} > submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
