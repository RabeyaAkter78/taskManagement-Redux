import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Rabeya Akter",
  email: "rabeya@gmail.com",
};
const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});
export default usersSlice.reducer;
