import { useState } from "react";
import BookingSlot from "./BookingSlot";

const BookingForm = (props) => {
  const { availableTimes, availableTimesDispatch, handleSubmit } = props;

  const [bookingInfo, setBookingInfo] = useState({
    Date: "",
    Time: "",
    NumberGuest: 1,
    Ocassion: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(bookingInfo);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={bookingInfo.Date}
          onChange={(evt) => {
            availableTimesDispatch({ date: new Date(evt.target.value) });
            setBookingInfo({ ...bookingInfo, Date: evt.target.value });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={bookingInfo.Time}
          onChange={(evt) => {
            setBookingInfo({ ...bookingInfo, Time: evt.target.value });
          }}
        >
          {availableTimes.map((x) => (
            <BookingSlot key={x} time={x} />
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={bookingInfo.NumberGuest}
          onChange={(evt) => {
            setBookingInfo({ ...bookingInfo, NumberGuest: evt.target.value });
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={bookingInfo.Ocassion}
          onChange={(evt) => {
            setBookingInfo({ ...bookingInfo, Ocassion: evt.target.value });
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" id="submitForm">
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
