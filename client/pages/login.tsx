import { useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser }: any = useContext(UserContext);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      setUser(data);

      alert("LOGIN SUCCESSFULL");
      // setRedirect(true);
    } catch (err) {
      alert("LOGIN FAILED");
    }
  };
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h2 className="text-center font-bold mb-4">Login</h2>
        <form onSubmit={submitHandler} className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center">
            <button className="btn">Login</button>
          </div>
          <div className="text-center py-2 font-semibold text-gray-500">
            Don't have a account?{" "}
            <Link href={"/register"} className="underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
