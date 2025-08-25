import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../axios/Axios";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/login", credentials);
      Cookies.set("role", response.data.role, { expires: 7 });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  token: Cookies.get("token") || null,
  role: Cookies.get("role") || null,
  accessControl: null, // Initially set to null
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.accessControl = null;
      Cookies.remove("token");
      Cookies.remove("role");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.accessControl = action.payload.access_control || null; // Set accessControl to null if not present
        Cookies.set("token", action.payload.token, { expires: 7 });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong!";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
