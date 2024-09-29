import Dish from "../../../assets/Dish icon.svg";
const ConfirmedBooking = () => {
  return (
    <>
      <section className="main confirmation-booking">
        <h3>The Booking has been confirmed!</h3>
        <p>You will receive an email with all the details.</p>
        <img alt="" src={Dish} width={"150px"}></img>
      </section>
    </>
  );
};

export default ConfirmedBooking;
