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
      return rejectWithValue(error.response?.data || error.message);
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
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateChannelPartnerStatus = createAsyncThunk(
  "channelPartners/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/${id}`, {
        status,
      });
      return { id, status, message: response.data?.message };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
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
      state.successMessage = null;
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
    // Update Status
    builder
      .addCase(updateChannelPartnerStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updateChannelPartnerStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, status, message } = action.payload;

        // Update status locally in cpList
        const index = state.cpList.findIndex((cp) => cp.id === id);
        if (index !== -1) {
          state.cpList[index].status = status;
        }

        state.successMessage = message || "Status updated successfully.";
      })
      .addCase(updateChannelPartnerStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to update status.";
      });
  },
});

export const { resetState } = channelPartnersSlice.actions;
export default channelPartnersSlice.reducer;
