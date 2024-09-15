import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/api";
import BookingPage from "./main/bookingpage/BookingPage";
import ConfirmedBooking from "./main/bookingpage/ConfirmedBooking";
import HomePage from "./main/homepage/HomePage";

const fetchData = (api, date) => {
  function fetch() {
    let times = api(date);
    return times;
  }
  return fetch();
};

export const initializeTimes = (api) => {
  return fetchData(api, new Date());
};

export const updateTimes = (api, date) => {
  return fetchData(api, date);
};

const Main = () => {
  const navigate = useNavigate();

  const [initialTimes, setInitialTimes] = useState([]);

  useEffect(() => {
    let times = initializeTimes(fetchAPI);
    setInitialTimes(times);
  }, []);

  function reducer(_state, action) {
    return action.times;
  }

  const [availableTimes, availableTimesDispatch] = useReducer(
    reducer,
    initialTimes,
  );

  const updateTimeFromApi = (date) => {
    let times = updateTimes(fetchAPI, date);
    return times;
  };

  const submitForm = (formData) => {
    let submitted = submitAPI(formData);
    if (submitted) {
      navigate("/confirmedbooking");
    } else {
      console.log("submitForm Error");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              availableTimesDispatch={availableTimesDispatch}
              updateTimes={updateTimeFromApi}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmedbooking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
