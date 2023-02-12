import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorect, setIncorect] = useState(false);
  const [active, setActive] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const { setUser, user }: any = useContext(UserContext);

  if (user && router.pathname === "/login") {
    router.push("/profile");
  }

  useEffect(() => {
    if (active) {
      if (
        email.trim().includes("@") &&
        email.trim().length > 5 &&
        password.trim().length > 7
      ) {
        setIsFound(true);
        setIncorect(false);
      } else {
        setIncorect(true);
      }
    }
  }, [password, email, active]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setActive(true);
    if (
      email.trim().includes("@") &&
      email.trim().length > 5 &&
      password.trim().length > 7
    ) {
      try {
        const { data } = await axios.post("http://localhost:3001/auth/login", {
          email,
          password,
        });
        await router.push("/");
        setUser(data);
        setIncorect(false);

        // alert("LOGIN SUCCESSFULL");
        // setRedirect(true);
      } catch (err) {
        // alert("LOGIN FAILED");
        setIsFound(false);
      }
    } else {
      // alert("Incorect email or password");
      setIncorect(true);
    }
  };
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h2 className="text-center font-bold mb-4">Login</h2>
        <form onSubmit={submitHandler} className="max-w-md mx-auto">
          {!isFound && (
            <p className="text-sm text-red-400 ml-2">
              E-mail or password is incorrect!
            </p>
          )}
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={incorect ? "bg-red-100" : ""}
          />
          <input
            type="password"
            minLength={8}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={incorect ? "bg-red-100" : ""}
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
