import { useEffect, useState } from "react";
import BookingSlot from "./BookingSlot";

const BookingForm = (props) => {
  const { availableTimes, availableTimesDispatch, handleSubmit, updateTimes } =
    props;

  const [timeOptions, setTimeOptions] = useState([]);
  const [bookingInfo, setBookingInfo] = useState({
    Date: new Date().toISOString().substring(0, 10),
    Time: "",
    NumberGuest: 1,
    Ocassion: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(bookingInfo);
  };

  useEffect(() => {
    let times = updateTimes(selectedDate);
    availableTimesDispatch({ times: times });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  useEffect(() => {
    let options = availableTimes.map((x) => <BookingSlot key={x} time={x} />);
    setTimeOptions(options);
  }, [availableTimes]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={bookingInfo.Date}
          onChange={(evt) => {
            setSelectedDate(new Date(evt.target.value));
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
          {timeOptions}
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
