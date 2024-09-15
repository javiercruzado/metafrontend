import { initializeTimes, updateTimes } from "./Main";

const fetchTimesMock = jest.fn();

test("Load initial times values", () => {
  fetchTimesMock.mockReturnValue([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  let initializeTimesArray = initializeTimes(fetchTimesMock);
  let expectedArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimesArray).toEqual(expectedArray);
});

test("Update the times", () => {
  fetchTimesMock.mockReturnValue(["20:00", "21:00", "22:00"]);
  let updateTimesResult = updateTimes(fetchTimesMock, new Date());
  let expectedArray = ["20:00", "21:00", "22:00"];
  expect(updateTimesResult).toEqual(expectedArray);
});
