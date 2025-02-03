import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  userDetails:[
    {
        userId: "monojitpalit4@gmail.com",
        userPassword: "12345"
    },
    {
        userId: "koly4@gmail.com",
        userPassword: "12345"
    }
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    signUpUser: (state,action) => {
      state.userDetails.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUpUser } = counterSlice.actions

export default counterSlice.reducer