import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import HotelContainer from "@/components/Hotels/HotelContainer";
import LandmarkContainer from "@/components/Landmarks/LandmarkContainer";

const Cart = () => {
  const router = useRouter();
  const { user, setUser, hotelsCart, landmarksCart }: any =
    useContext(UserContext);

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
    <div className="h-full">
      <div className="sticky top-[50px]">
        <h1 className="">CART</h1>
      </div>
      {landmarksCart.length > 0 ? (
        <h1 className="text-center">Landmarks You Choose</h1>
      ) : (
        <div>
          <h1 className="text-center">No Landmarks Are Added To Cart</h1>
          <Link href="/landmarks" className="flex justify-center">
            <button className="btn">SEE LANDMARKS</button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mx-auto max-w-max mb-8">
        {landmarksCart?.map((landmarkInCart: any) => (
          <div key={landmarkInCart._id}>
            <LandmarkContainer landmark={landmarkInCart} />
          </div>
        ))}
      </div>
      {hotelsCart.length > 0 ? (
        <h1 className="text-center">Hotels You Choose</h1>
      ) : (
        <div>
          <h1 className="text-center">No Hotels Are Added To Cart</h1>
          <Link href="/hotels" className="flex justify-center">
            <button className="btn">SEE HOTELS</button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mx-auto max-w-max">
        {hotelsCart.map((hotelInCart: any) => (
          <div key={hotelInCart._id}>
            <HotelContainer hotel={hotelInCart} />
          </div>
        ))}
      </div>

      {user && (
        <div className="m-auto w-[400px] mt-[50px]">
          <div onClick={logout} className="button cursor-pointer">
            Log out
          </div>
          <button onClick={clickHandler} className="button mt-2">
            Delete user
          </button>
          <p className="text-center mt-1">Logged In as ({user?.email})</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
