import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SingleHotel = () => {
  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState(false);

  const router = useRouter();
  const id = router.query.hotelId;

  useEffect(() => {
    fetch("http://localhost:3001/hotels/" + id)
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
        console.log(data);
      })
      .catch(setError(true));
  });

  return (
    <div>
      <h1>{hotel.title}</h1>
      <img src={hotel.imageUrl} />
      <div class="image-grid">
        <img
          class="image-grid-col-2 image-grid-row-2"
          style={{ borderRadius: "20px 0px 0px 20px" }}
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/246679637.jpg?k=1a2ccf5671d9ed77c9a1c9551c64e75b07713f7166a2822953d23626ac585ac8&o=&hp=1"
          alt="architecture"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/246681720.jpg?k=2cb9baed07efd4aa005cb624787fba2b758ec79239079ae161a39349f5a4d7db&o=&hp=1"
          alt="architecture"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/246681724.jpg?k=dfcf8391ca0975ffbe308d6a47ee464095fb4c1e1cf86a6ad1ac4f64ec455fd7&o=&hp=1"
          style={{ borderRadius: "0px 20px 0px 0px" }}
          alt="architecture"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/246681684.jpg?k=904ad8340365f92c774db0f9926dbddd542ed8b111b6ceff07177469fa0df191&o=&hp=1"
          alt="architecture"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/250011458.jpg?k=d475cf3e7b8603a128403d9615e21a98e9a0b68e733dbf8342517b8de5af54a7&o=&hp=1"
          alt="architecture"
          style={{ borderRadius: "0px 0px 20px 0px" }}
        />
      </div>
    </div>
  );
};

export default SingleHotel;
