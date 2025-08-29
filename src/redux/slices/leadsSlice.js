import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../axios/Axios";

// Fetch Leads
export const fetchLeads = createAsyncThunk(
  "leads/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/leads/admin");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create Lead
export const createLead = createAsyncThunk(
  "leads/create",
  async (leadData, { rejectWithValue }) => {
    try {
      const response = await api.post("/leads", leadData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  leadList: [],
  isLoading: false,
  error: null,
  successMessage: null,
  pagination: {
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  },
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    resetLeadState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchLeads.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leadList = action.payload.results || [];
        state.pagination = {
          totalItems: action.payload.totalItems || 0,
          totalPages: action.payload.totalPages || 0,
          currentPage: action.payload.currentPage || 0,
        };
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createLead.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(createLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload?.message || "Lead created successfully.";
      })
      .addCase(createLead.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetLeadState } = leadsSlice.actions;
export default leadsSlice.reducer;
