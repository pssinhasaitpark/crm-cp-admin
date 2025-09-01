import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../axios/Axios";

// Fetch Leads
export const fetchLeads = createAsyncThunk(
  "leads/fetch",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await api.get("/leads/admin", { params });
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
// Fetch Master Status
export const fetchMasterStatus = createAsyncThunk(
  "leads/fetchMasterStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/master-status");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update Lead
export const updateLead = createAsyncThunk(
  "leads/update",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/leads/admin/${id}`, { status });
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
  masterStatus: [], //
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
      })
       // 👇 Master Status
    .addCase(fetchMasterStatus.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMasterStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.masterStatus = action.payload?.results || [];
    })
    .addCase(fetchMasterStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(updateLead.pending, (state) => {
    state.isLoading = true;
    state.successMessage = null;
    state.error = null;
  })
  .addCase(updateLead.fulfilled, (state, action) => {
    state.isLoading = false;
    state.successMessage = action.payload?.message || "Lead updated successfully.";
  })
  .addCase(updateLead.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
  },
});

export const { resetLeadState } = leadsSlice.actions;
export default leadsSlice.reducer;
