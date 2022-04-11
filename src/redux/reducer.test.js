import { reducer } from "./reducer";
const initialState = {
  data: [],
  loading: false,
};
describe("reducer", () => {
  test("return the state with default value", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  test("return the state with type loading", () => {
    expect(reducer(initialState, { type: "LOADING" })).toEqual({
      data: [],
      loading: true,
    });
  });
  test("return the state with type Get Data", () => {
    expect(reducer(initialState, { type: "GET-DATA", payload: [5] })).toEqual({
      data: [5],
      loading: false,
    });
  });
});
