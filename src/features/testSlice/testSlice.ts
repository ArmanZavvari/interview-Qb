import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ITestSlice {
    test  : string
}

const initialState: ITestSlice = {
  test : "initial text"
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    changeTest: (state, { payload }: PayloadAction<string>) => {
      state.test = payload;
    },
  },
});

export default testSlice.reducer;
export const {changeTest} = testSlice.actions
