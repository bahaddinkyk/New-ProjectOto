import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patients',
  initialState: [],
  reducers: {
    addPatient: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addPatient } = patientSlice.actions;
export default patientSlice.reducer;