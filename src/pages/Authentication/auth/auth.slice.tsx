import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService from "../../../services/authService";

interface User {
  username: string;
  email?: string;
}

export interface AuthState {
  isAuth: boolean;
  user: User | null;
  isLoading: boolean;
  error: any;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegistrationCredentials extends LoginCredentials {
  email: string;
}

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ username, password }: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(username, password);
      return { ...response, username };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logoutAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.logout();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registrationAsync = createAsyncThunk(
  "auth/registrationAsync",
  async (
    { username, email, password }: RegistrationCredentials,
    { rejectWithValue }
  ) => {
    try {
      console.log("reg" + username);
      const response = await authService.registration(
        username,
        email,
        password
      );
      return { ...response, username, email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: AuthState = {
  isAuth: false,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        const user: User = {
          username: action.payload.username,
        };
        state.user = user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.user = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registrationAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registrationAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        const user: User = {
          username: action.payload.username,
          email: action.payload.email,
        };
        state.user = user;
      })
      .addCase(registrationAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions, reducer } = authSlice;
