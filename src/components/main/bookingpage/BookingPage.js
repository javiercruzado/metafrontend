import { useState } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = (props) => {
  const { availableTimes } = props;
  const [bookingInfo, setBookingInfo] = useState({});

  return (
    <section className="main-section book-page-section">
      <h1>Little Lemon</h1>
      <h2>Reservations</h2>
      <p>
        Please enter the information required to book enter your reservation
      </p>
      <BookingForm
        bookingInfo={bookingInfo}
        setBookingInfo={setBookingInfo}
        availableTimes={availableTimes}
      />
    </section>
  );
};

export default BookingPage;
