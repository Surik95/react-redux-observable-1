import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
  search: "",
};

export const changeSearchField = (state, action) => ({
  ...state,
  search: action.payload,
});

export const searchSkillsRequest = (state) => ({
  ...state,
  loading: true,
  error: null,
});
export const searchSkillsSuccess = (state, action) => ({
  ...state,
  items: action.payload,
  loading: false,
  error: null,
});
export const searchSkillsFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload,
});

const skilsSlice = createSlice({
  name: "skils",
  initialState,
  reducers: {
    changeSearchField,
    searchSkillsFailure,
    searchSkillsSuccess,
    searchSkillsRequest,
  },
});

// export default authSlice;

// const skilsSlice = createSlice({
//   name: "skils",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//     search: "",
//   },
//   reducers: {
//     changeSearchField(state, action) {
//       return {
//         ...state,
//         search: action.payload,
//       };
//     },
//     searchSkilsRequest(state) {
//       return { ...state, loading: true, error: null };
//     },
//     searchSkilsSuccess(state, action) {
//       return { ...state, items: action.payload, loading: false, error: null };
//     },
//     searchSkilsFailure(state, action) {
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     },
//   },
// });

export default skilsSlice.reducer;
