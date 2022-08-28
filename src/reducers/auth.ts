import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface States {
  isAuthenticated: boolean;
}

const initialState: States = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;

const { reducer: authReducer } = authSlice;

export default authReducer;
