import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";

const Profile = () => {
  const router = useRouter();
  const { user, setUser }: any = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, [user]);

  const clickHandler = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/delete-user", {
        id: user._id,
      })
      .then(() => {
        router.push("/");
        setUser(null);
      });
  };

  const logout = (e: any) => {
    e.preventDefault();
    axios.get("http://localhost:3001/auth/logout").then(() => setUser(null));
  };

  return (
    <>
      {user && (
        <div>
          <button onClick={clickHandler} className="button">
            Delete user
          </button>
          <div onClick={logout} className="button mt-2">
            Log out
          </div>
          <p>Logged In as ({user?.email})</p>
        </div>
      )}
    </>
  );
};

export default Profile;
