import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SingleHotel = () => {
  const [hotel, setHotel] = useState([]);

  const router = useRouter();
  const id = router.query.hotelId;

  useEffect(() => {
    fetch("http://localhost:3001/hotels/" + id)
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>{hotel.title}</h1>
      <img src={hotel.imageUrl} />
    </div>
  );
};

export default SingleHotel;
