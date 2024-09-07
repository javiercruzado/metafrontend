import { initializeTimes, updateTimes } from "./Main";

test("Load initial times values", () => {
  let initializeTimesArray = initializeTimes();
  let expectedArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimesArray).toEqual(expectedArray);
});

test("Update the times", () => {
  let initialDate = Date()
  let updateTimesResult = updateTimes(initialDate);
  let expectedArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(updateTimesResult).toEqual(expectedArray);
});

