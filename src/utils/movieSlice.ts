import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
    initialState: {
        nowPlayingMovie :null,
        trailerId:null
    },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie =  action.payload;
    },
    addTrailerId:(state,action)=>{
      state.trailerId =  action.payload;
    }
  },
});

export const { addNowPlayingMovie,addTrailerId } = movieSlice.actions;
export default movieSlice.reducer;
