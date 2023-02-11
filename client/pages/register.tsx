import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    //     axios
    //       .post("/register", {
    //         name,
    //         email,
    //         password,
    //       })
    //       .then((data) => data.json())
    //       .then((user) => console.log(user))
    //       .catch((err) => console.log(err));
    //   };
    try {
      await axios.post("http://localhost:3001/auth/register", {
        name,
        email,
        password,
      });
      alert("RESGISTRATION SUCCESSFULL, NOW LOG IN");
      // setRedirect(true);
    } catch (err) {
      alert("Registration failed, try Again");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h2 className="text-center font-bold mb-4">Register</h2>
        <form onSubmit={submitHandler} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            <button className="btn">Register</button>
          </div>
          <div className="text-center py-2 font-semibold text-gray-500">
            Allready have an account?{" "}
            <Link href={"/login"} className="underline text-black">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;