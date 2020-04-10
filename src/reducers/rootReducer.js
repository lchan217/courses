export default function rootReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_COURSE":
      return action.payload;

    default:
      return state;
  }
}
