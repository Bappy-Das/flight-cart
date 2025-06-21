import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchResult from "./components/SearchResult";
import TravelFeatures from "./components/TravelFeatures";
import { searchFlights } from "./api/flightSearch.js";

function App() {
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState(null);

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
      <Nav />
      <Banner onFetchFlightData={fetchFlightData} />
      <TravelFeatures />
      <SearchResult flightData={flightData} loader={loading} />
      <Footer />
    </>
  );
}

export default App;
