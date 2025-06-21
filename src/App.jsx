import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchResult from "./components/SearchResult";
import TravelFeatures from "./components/TravelFeatures";
import { searchFlights } from "./api/flightSearch.js";

function App() {
  const [homeLoading, setHomeLoading] = useState(true);
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHomeLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const fetchFlightData = async (searchData) => {
    console.log(searchData);
    setLoading(true);
    try {
      const data = await searchFlights(searchData);
      setFlightData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  return (
    <>
      {homeLoading ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-300 border-t-[#1b1d43]"></div>
            <div className="absolute top-0 left-0 animate-spin rounded-full h-20 w-20 border-4 border-transparent border-b-amber-400 [animation-direction:reverse] [animation-duration:0.8s]"></div>
          </div>
        </div>
      ) : (
        <>
          <Nav />
          <Banner onFetchFlightData={fetchFlightData} />
          <TravelFeatures />
          <SearchResult flightData={flightData} loader={loading} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
