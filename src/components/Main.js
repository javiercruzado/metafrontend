import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import BookingPage from "./main/bookingpage/BookingPage";
import HomePage from "./main/homepage/HomePage";
import { fetchAPI } from "../api/api";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  return fetchAPI(action.date);
};

const Main = () => {
  const [availableTimes, availableTimesDispatch] = useReducer(
    updateTimes,
    initializeTimes(),
  );

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                availableTimesDispatch={availableTimesDispatch}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
