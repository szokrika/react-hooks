export default function reducer(state, action) {
  switch (action.type) {
    case "hello":
      return { ...state, appName: action.payload };
    default:
      return state;
  }
}
