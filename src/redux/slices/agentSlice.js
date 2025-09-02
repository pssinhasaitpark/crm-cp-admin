import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../axios/Axios";

// Fetch Agents
export const fetchAgents = createAsyncThunk(
  "agents/fetch",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(`/agent`, { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create Agent
export const createAgent = createAsyncThunk(
  "agents/create",
  async (agentData, { rejectWithValue }) => {
    try {
      const response = await api.post("/agent/create", agentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  agentList: [],
  isLoading: false,
  error: null,
  successMessage: null,
  pagination: {
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  },
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    resetAgentState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.agentList = action?.payload?.results;
        state.pagination = {
          totalItems: action.payload.totalItems || 0,
          totalPages: action.payload.totalPages || 0,
          currentPage: action.payload.currentPage || 0,
        };
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Create
    builder
      .addCase(createAgent.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(createAgent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage =
          action.payload?.message || "Agent created successfully.";
      })
      .addCase(createAgent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAgentState } = agentsSlice.actions;
export default agentsSlice.reducer;
