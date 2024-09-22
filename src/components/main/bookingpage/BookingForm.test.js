import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { DateISOFormat } from "../../../api/utils";

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

  let date = new Date();
  date.setDate(date.getDate() + 2);

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: DateISOFormat(date) },
  });

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: 4 },
  });

  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "Birthday" },
  });

  fireEvent.click(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalledWith({
    Date: DateISOFormat(date),
    Time: "",
    NumberGuest: "4",
    Ocassion: "Birthday",
  });
});

test("Validates Number of guests", () => {
  render(
    <BookingForm
      availableTimes={[]}
      availableTimesDispatch={() => []}
      updateTimes={() => []}
    />,
  );
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: 1 },
  });
  fireEvent.blur(screen.getByLabelText("Number of guests"));
  const validationText = screen.getByText(
    "Reserve a table for more than one person",
  );
  expect(validationText).toBeInTheDocument();
});

test("BookingsForm component fails when submitted by the user", () => {
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
    target: { value: 1 },
  });

  fireEvent.click(screen.getByRole("button"));

  const validationText = screen.getByText(
    "Reserve a table for more than one person",
  );
  expect(validationText).toBeInTheDocument();
});
