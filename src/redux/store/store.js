import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../slices/authSlice";
import channelPartnersReducer from './../slices/channelPartnersSlice'
import agentsReducers from './../slices/agentSlice'
import leadsReducer from './../slices/leadsSlice'
import searchReducer from './../slices/searchSlice'
import projectsReducer from '../slices/projectsSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    channelPartners:channelPartnersReducer,
    agents:agentsReducers,
    leads: leadsReducer,
    search: searchReducer,
    projects:projectsReducer,
  },
});
