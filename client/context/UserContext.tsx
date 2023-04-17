import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [landmarksCart, setLandmarksCart] = useState<any>([]);
  const [hotelsCart, setHotelsCart] = useState<any>([]);

  useEffect(() => {
    if (!user) {
      axios.get("http://localhost:3001/auth/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, [user]);

  const addToLandmarksCart = (landmark: any) => {
    setLandmarksCart([...landmarksCart, landmark]);
  };

  const addToHotelsCart = (hotel: any) => {
    setHotelsCart([...hotelsCart, hotel]);
  };

  const removeLandmarkFromLandmarksCart = (landmark: any) => {
    const filteredLandmarksInCart = landmarksCart.filter(
      (landmarkInCart: any) => landmarkInCart._id !== landmark._id
    );
    setLandmarksCart([...filteredLandmarksInCart]);
  };

  const removeHotelFromHotelsCart = (hotel: any) => {
    const filteredHotelsInCart = hotelsCart.filter(
      (hotelInCart: any) => hotelInCart._id !== hotel._id
    );
    setHotelsCart([...filteredHotelsInCart]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ready,
        addToHotelsCart,
        hotelsCart,
        addToLandmarksCart,
        landmarksCart,
        removeLandmarkFromLandmarksCart,
        removeHotelFromHotelsCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
