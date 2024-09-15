export const readFromLocalStorage = () => {
  let reservations = JSON.parse(localStorage.getItem("reservations"));
  if (Array.isArray(reservations)) {
    return reservations;
  } else {
    return [];
  }
};

export const saveToLocalStore = (reservations) => {
  localStorage.setItem("reservations", reservations);
};
