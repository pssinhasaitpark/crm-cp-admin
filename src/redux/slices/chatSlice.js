import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../axios/Axios";

// Create Chat (POST)
export const createChat = createAsyncThunk(
  "chat/create",
  async ({ agentId, messageData }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/chat/create/${agentId}`, messageData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Fetch All Chat History (GET)
export const fetchChatHistory = createAsyncThunk(
  "chat/fetchHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/chat/history`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Fetch Single Chat by ID (GET)
export const fetchSingleChat = createAsyncThunk(
  "chat/fetchSingle",
  async (chatId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/chat/history/${chatId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const fetchChatParticipants = createAsyncThunk(
  "chat/fetchParticipants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/chat/participants`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const initialState = {
  chats: [], // list of chats
  singleChat: null, // for detailed chat
  participants: [],
  isLoading: false,
  error: null,
  successMessage: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChatState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // Create Chat
    builder
      .addCase(createChat.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage =
          action.payload?.message || "Chat created successfully.";
      })
      .addCase(createChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Fetch All Chats
    builder
      .addCase(fetchChatHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload?.results || [];
      })
      .addCase(fetchChatHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Fetch Single Chat
    builder
      .addCase(fetchSingleChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleChat = action.payload;
      })
      .addCase(fetchSingleChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // ✅ Fetch Participants
    builder
      .addCase(fetchChatParticipants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChatParticipants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.participants = action.payload?.participants || [];
      })
      .addCase(fetchChatParticipants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetChatState } = chatSlice.actions;
export default chatSlice.reducer;
