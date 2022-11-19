import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isPending: false,
  isSuccess: false,
  errorMessage: "",
  movie: [],
  totalResult: null,
};

export const fetchMovie = createAsyncThunk("movie/fetchMovie", async (API) => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.isPending = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isPending = false;
        state.isSuccess = false;
        state.errorMessage = action.error.message;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = [...action.payload.results];
        state.totalResult = action.payload.total_result;
        state.isPending = false;
        state.isSuccess = true;
        state.errorMessage = "";
      });
  },
});

export const { resetErrorMessage } = movieSlice.actions;
export default movieSlice.reducer;
