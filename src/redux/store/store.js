import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../slices/authSlice";
import channelPartnersReducer from './../slices/channelPartnersSlice'
import agentsReducers from './../slices/agentSlice'
import leadsReducer from './../slices/leadsSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    channelPartners:channelPartnersReducer,
    agents:agentsReducers,
    leads: leadsReducer,
  },
});
