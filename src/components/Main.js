import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./main/HomePage";
import BookingPage from "./main/BookingPage";

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
