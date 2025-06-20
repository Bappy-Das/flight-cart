import axios from "axios";

const BASE_URL = import.meta.env.VITE_MAIN_API_URL;

console.log(BASE_URL);

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const searchFlights = async () => {
  try {
    const response = await axios.post(
      BASE_URL, // ✅ already complete URL
      {
        OriginDestinationOptions: [
          {
            DepartureAirport: "SIN",
            ArrivalAirport: "KUL",
            FlyDate: "2025-06-20",
          },
        ],
        Passengers: [
          {
            PassengerType: "ADT",
            Quantity: 1,
          },
        ],
        CabinClass: "Economy",
        ApiId: 1002,
      },
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
