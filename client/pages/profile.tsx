import { useContext } from "react";
import { UserContext } from "@/UserContext";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { user, setUser }: any = useContext(UserContext);

  console.log(user);

  const clickHandler = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/logout", {
        id: user._id,
      })
      .then(() => {
        router.push("/");
        setUser(null);
      });
  };
  return (
    <div>
      <button onClick={clickHandler} className="button">
        Delete user
      </button>
      <p>Logged In as ({user?.email})</p>
    </div>
  );
};

export default Profile;
