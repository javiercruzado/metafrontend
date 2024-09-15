import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={[]}
      availableTimesDispatch={() => []}
      updateTimes={() => []}
    />,
  );
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("BookingsForm component can be submitted by the user", () => {
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={[]}
      handleSubmit={handleSubmit}
      availableTimesDispatch={() => []}
      updateTimes={() => []}
    />,
  );

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: 4 },
  });

  fireEvent.click(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalledWith({
    Date: new Date().toISOString().substring(0, 10),
    Time: "",
    NumberGuest: "4",
    Ocassion: "",
  });
});
