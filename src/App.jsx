import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchResult from "./components/SearchResult";
import TravelFeatures from "./components/TravelFeatures";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      {/* <TravelFeatures /> */}
      <SearchResult />
      <Footer />
    </>
  );
}

export default App;
