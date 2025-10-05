import React from "react";
import "./App.css";
import CinemaSeatBooking from "./components/cinema-seat-booking";

function App() {
  return (
    <CinemaSeatBooking
      layout={{
        rows: 8,
        seatsPerRow: 12,
        aislePosition: 8,
      }}
      seatTypes={{
        regular: { name: "Regular", price: 150, rows: [0, 1, 2] },
        premium: { name: "Premium", price: 250, rows: [3, 4, 5] },
        vip: { name: "VIP", price: 350, rows: [6, 7] },
      }}
     
      onBookingComplete={(summary) => {
        // Demo: log booking summary
        console.log("Booking complete:", summary);
        alert(
          `Booked ${summary.seats.length} seat(s): ${summary.seats.join(", ")}\n` +
          `Total: ${summary.currency}${summary.total}`
        );
      }}
    />
  );
}

export default App;
