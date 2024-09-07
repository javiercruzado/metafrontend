import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("BookingsForm component can be submitted by the user", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={[]} handleSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: 4 },
  });

  fireEvent.click(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalledWith({
    Date: "",
    Time: "",
    NumberGuest: "4",
    Ocassion: "",
  });
});
