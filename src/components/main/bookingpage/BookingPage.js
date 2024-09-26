import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = (props) => {
  const { availableTimes, availableTimesDispatch, submitForm, updateTimes } =
    props;

  const handleSubmit = (bookingInfo) => {
    submitForm(bookingInfo);
  };

  return (
    <section className="main-section">
      <article className="book-page-section">
        <h1>Little Lemon</h1>
        <h2>Reservations</h2>
        <p>
          Please enter the information required to book enter your reservation
        </p>
        <BookingForm
          availableTimes={availableTimes}
          handleSubmit={handleSubmit}
          availableTimesDispatch={availableTimesDispatch}
          updateTimes={updateTimes}
        />
      </article>
    </section>
  );
};

export default BookingPage;
