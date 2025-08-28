import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../slices/authSlice";
import channelPartnersReducer from "./../slices/channelPartnersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    channelPartners: channelPartnersReducer,
  },
});
