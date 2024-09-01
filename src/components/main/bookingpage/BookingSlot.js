const BookingSlot = (props) => {
  const { time } = props;
  return (
    <>
      <option>{time}</option>
    </>
  );
};

export default BookingSlot;
