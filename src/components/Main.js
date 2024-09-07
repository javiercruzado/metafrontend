import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import BookingPage from "./main/bookingpage/BookingPage";
import HomePage from "./main/homepage/HomePage";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (date) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
