import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { adduser, removeUser } = useSlice.actions;
export default useSlice.reducer;
