import BookingSlot from "./BookingSlot";

const BookingForm = (props) => {
  const {
    bookingInfo,
    setBookingInfo,
    availableTimes,
    availableTimesDispatch,
  } = props;

  return (
    <>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(evt) => {
            setBookingInfo({ ...bookingInfo, Date: evt.target.value });
            availableTimesDispatch()
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onClick={(evt) => {
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
          onClick={(evt) => {
            setBookingInfo({ ...bookingInfo, NumberGuest: evt.target.value });
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onClick={(evt) => {
            setBookingInfo({ ...bookingInfo, Ocassion: evt.target.value });
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
