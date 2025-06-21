import axios from "axios";

const BASE_URL = import.meta.env.VITE_MAIN_API_URL;

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const searchFlights = async (searchData) => {
  console.log("searchData", searchData);
  try {
    const response = await axios.post(
      BASE_URL,
      {
        OriginDestinationOptions: [
          {
            DepartureAirport: searchData.DepartureAirport,
            ArrivalAirport: searchData.ArrivalAirport,
            FlyDate: searchData.FlyDate,
          },
        ],
        Passengers: [
          {
            PassengerType: "ADT",
            Quantity: searchData.PassengerQuantity || 1,
          },
        ],
        CabinClass: searchData.CabinClass || "Economy",
        ApiId: 1002,
      },
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
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error.response?.data || error.message);
    throw error;
  }
};
