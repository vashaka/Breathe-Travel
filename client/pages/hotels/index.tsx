import { useEffect, useState } from "react";
import HotelContainer from "../../components/Hotels/HotelContainer";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const HotelsPage = () => {
  const router = useRouter();
  const [hotelsInfo, setHotelsInfo] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/hotels")
      .then((response) => response.json())
      .then((data) => {
        setHotelsInfo(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Head>
        <title>hotels</title>
      </Head>
      <div className=" grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] mx-auto">
        {hotelsInfo.length > 0 &&
          hotelsInfo.map((hotel) => {
            return (
              <Link key={hotel._id} href={`/hotels/${hotel._id}`}>
                <HotelContainer hotel={hotel} />
              </Link>
            );
          })}
      </div>
      {hotelsInfo.length === 0 && (
        <div className="">
          <h1 className="text-center">No Hotels found, Refresh the site!</h1>
        </div>
      )}
    </div>
  );
};

export default HotelsPage;
