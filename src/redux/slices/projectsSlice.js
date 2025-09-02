import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../axios/Axios";

// Fetch Projects
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(`/projects`, { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create Project
export const createProject = createAsyncThunk(
  "projects/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/projects/admin/create", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update Project Status
export const updateProjectStatus = createAsyncThunk(
  "projects/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/projects/admin/${id}`, { status });
      return { id, status, message: response.data?.message };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  projectList: [],
  isLoading: false,
  error: null,
  successMessage: null,
  pagination: {
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  },
};

const projectsSlice = createSlice({
  name: "projects",
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
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectList = action.payload.results;
        state.pagination = {
          totalItems: action.payload.totalItems || 0,
          totalPages: action.payload.totalPages || 0,
          currentPage: action.payload.currentPage || 0,
        };
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Create
    builder
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage =
          action.payload?.message || "Project created successfully.";
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Update Status
    builder
      .addCase(updateProjectStatus.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(updateProjectStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, status, message } = action.payload;

        const index = state.projectList.findIndex((project) => project.id === id);
        if (index !== -1) {
          state.projectList[index].status = status;
        }

        state.successMessage = message || "Project status updated successfully.";
      })
      .addCase(updateProjectStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to update project status.";
      });
  },
});

export const { resetState } = projectsSlice.actions;
export default projectsSlice.reducer;
