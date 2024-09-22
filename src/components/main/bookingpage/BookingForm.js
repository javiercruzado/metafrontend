import { useEffect, useState } from "react";
import BookingSlot from "./BookingSlot";
import FormInput from "../../../shared/FormInput";
import { DateISOFormat } from "../../../api/utils";

const BookingForm = (props) => {
  const { availableTimes, availableTimesDispatch, handleSubmit, updateTimes } =
    props;

  const [timeOptions, setTimeOptions] = useState([]);
  const [bookingInfo, setBookingInfo] = useState({
    Date: DateISOFormat(new Date()),
    Time: "",
    NumberGuest: 2,
    Ocassion: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(bookingInfo);
    }
  };

  const [validationInfo, setValidationInfo] = useState({
    bookingDate: { isValid: true },
    bookingTime: { isValid: true },
    bookingNumberGuests: { isValid: true },
    bookingOcassion: { isValid: true },
  });

  useEffect(() => {
    let times = updateTimes(selectedDate);
    availableTimesDispatch({ times: times });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  useEffect(() => {
    let options = availableTimes.map((x) => <BookingSlot key={x} time={x} />);
    setTimeOptions(options);
  }, [availableTimes]);

  const onChangeBookingDate = (evt) => {
    setSelectedDate(new Date(evt.target.value));
    setBookingInfo({ ...bookingInfo, Date: evt.target.value });
  };

  const onChangeBookingTime = (evt) => {
    setBookingInfo({ ...bookingInfo, Time: evt.target.value });
  };

  const onChangeBookingNumberOfGuests = (evt) => {
    setBookingInfo({ ...bookingInfo, NumberGuest: evt.target.value });
  };

  const onChangeOcassion = (evt) => {
    setBookingInfo({ ...bookingInfo, Ocassion: evt.target.value });
  };

  const validate = () => {
    let dateIsValid = true;
    let dateValidationMessage = "";
    if (bookingInfo.Date <= DateISOFormat(new Date())) {
      dateIsValid = false;
      dateValidationMessage =
        "Reservations are available for dates starting tomorrow";
    }

    let isNumberOfGuestIsValid = true;
    let numberOfGuestValidationMessage = "";
    if (Number(bookingInfo.NumberGuest) < 2) {
      isNumberOfGuestIsValid = false;
      numberOfGuestValidationMessage =
        "Reserve a table for more than one person";
    }

    let isOcassionValid = true;
    let ocassionValidationMessage = "";
    if (bookingInfo.Ocassion === "") {
      isOcassionValid = false;
      ocassionValidationMessage = "Choose an ocassion";
    }
    setValidationInfo({
      ...validationInfo,
      bookingDate: {
        ...validationInfo.bookingDate,
        isValid: dateIsValid,
        message: dateValidationMessage,
      },
      bookingNumberGuests: {
        ...validationInfo.bookingNumberGuests,
        isValid: isNumberOfGuestIsValid,
        message: numberOfGuestValidationMessage,
      },
      bookingOcassion: {
        ...validationInfo.Ocassion,
        isValid: isOcassionValid,
        message: ocassionValidationMessage,
      },
    });

    return dateIsValid && isOcassionValid && isOcassionValid;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormInput validationInfo={validationInfo.bookingDate}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={bookingInfo.Date}
            onChange={onChangeBookingDate}
            onBlur={validate}
          />
        </FormInput>
        <FormInput validationInfo={validationInfo.bookingTime}>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={bookingInfo.Time}
            onChange={onChangeBookingTime}
            onBlur={validate}
          >
            {timeOptions}
          </select>
        </FormInput>
        <FormInput validationInfo={validationInfo.bookingNumberGuests}>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={bookingInfo.NumberGuest}
            onChange={onChangeBookingNumberOfGuests}
            onBlur={validate}
          />
        </FormInput>
        <FormInput validationInfo={validationInfo.bookingOcassion}>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={bookingInfo.Ocassion}
            onChange={onChangeOcassion}
            onBlur={validate}
          >
            <option defaultValue={""}>Select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </FormInput>
        <button type="submit" id="submitForm">
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
