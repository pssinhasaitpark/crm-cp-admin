import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../axios/Axios";

// Fetch CPs
export const fetchChannelPartners = createAsyncThunk(
  "channelPartners/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/channel-partners`);
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
      const response = await api.post("/channel-partners/admin/create", cpData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
        state.cpList = action.payload;
      })
      .addCase(fetchChannelPartners.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Create
    builder
      .addCase(createChannelPartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChannelPartner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cpList.push(action.payload);
      })
      .addCase(createChannelPartner.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = channelPartnersSlice.actions;
export default channelPartnersSlice.reducer;
