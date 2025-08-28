import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../axios/Axios";

// Fetch CPs
export const fetchChannelPartners = createAsyncThunk(
  "channelPartners/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/channel-partner`);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create CP
export const createChannelPartner = createAsyncThunk(
  "channelPartners/create",
  async (cpData, { rejectWithValue }) => {
    try {
      const response = await api.post("/channel-partner/admin/create", cpData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  cpList: [],
  isLoading: false,
  error: null,
  successMessage: null,
  pagination: {
      totalItems: 0,
      totalPages: 0,
      currentPage: 0,
    //   limit: 10, // Default page size
    },
};

const channelPartnersSlice = createSlice({
  name: "channelPartners",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder
      .addCase(fetchChannelPartners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChannelPartners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cpList = action.payload.results;
        state.pagination = {
          totalItems: action.payload.totalItems || 0,
          totalPages: action.payload.totalPages || 0,
          currentPage: action.payload.currentPage || 0,
        //   limit: action.payload.limit || 10,
        };
      })
      .addCase(fetchChannelPartners.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Create
    builder
      .addCase(createChannelPartner.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.error = null;

      })
      .addCase(createChannelPartner.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.cpList.push(action.payload);
        state.successMessage =
          action.payload?.message || "Channel Partner added successfully.";
      })
      .addCase(createChannelPartner.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = channelPartnersSlice.actions;
export default channelPartnersSlice.reducer;
