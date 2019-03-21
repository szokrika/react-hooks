export default function reducer(state, action) {
  switch (action.type) {
    case "async-loading":
      return { ...state, loading: action.payload };
    case "hello":
      return { ...state, appName: action.payload };
    default:
      return state;
  }
}
