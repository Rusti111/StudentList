import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
