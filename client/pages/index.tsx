import HotelContainer from "../components/Hotels/HotelContainer";
import Head from "next/head";

const HomePage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div>
      <Head>
        <title>Breathe.</title>
      </Head>
      <div className="grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-5 gap-[30px] mx-auto">
        {arr.map((hotel) => {
          return (
            <div>
              <HotelContainer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
