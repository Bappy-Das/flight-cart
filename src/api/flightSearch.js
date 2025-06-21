import axios from "axios";

const BASE_URL = import.meta.env.VITE_MAIN_API_URL;

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const searchFlights = async (searchData) => {
  console.log("searchData", searchData.TripType);
  const requestData = {
    OriginDestinationOptions: [
      {
        DepartureAirport: searchData.DepartureAirport,
        ArrivalAirport: searchData.ArrivalAirport,
        FlyDate: searchData.DepartureFlyDate,
      },
    ],
    Passengers: [
      {
        PassengerType: searchData.passengerType || "ADT",
        Quantity: searchData.quantity || 1,
      },
    ],
    CabinClass: searchData.cabinClass || "Economy",
    ApiId: searchData.apiId || 1002,
  };

  if (searchData.TripType === "round-trip") {
    requestData.OriginDestinationOptions.push({
      DepartureAirport: searchData.ArrivalAirport,
      ArrivalAirport: searchData.DepartureAirport,
      FlyDate: searchData.ReturnFlyDate,
    });
  }

  try {
    const response = await axios.post(BASE_URL, requestData, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error.response?.data || error.message);
    throw error;
  }
};

// {
//   OriginDestinationOptions: [
//     {
//       DepartureAirport: "SIN",
//       ArrivalAirport: "KUL",
//       FlyDate: "2025-07-13",
//     },
//   ],
//   Passengers: [
//     {
//       PassengerType: "ADT",
//       Quantity: 1,
//     },
//   ],
//   CabinClass: "Economy",
//   ApiId: 1002,
// },
