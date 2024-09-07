import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = (props) => {
  const { availableTimes, availableTimesDispatch } = props;

  const handleSubmit = (bookingInfo) => {
    console.log("handleSubmit ", bookingInfo);
  };

  return (
    <section className="main-section book-page-section">
      <h1>Little Lemon</h1>
      <h2>Reservations</h2>
      <p>
        Please enter the information required to book enter your reservation
      </p>
      <BookingForm
        availableTimes={availableTimes}
        handleSubmit={handleSubmit}
        availableTimesDispatch={availableTimesDispatch}
      />
    </section>
  );
};

export default BookingPage;
