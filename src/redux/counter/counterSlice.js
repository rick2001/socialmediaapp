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
    },
    resetUserPassword:(state, action)=>{
        const {userId, newPassword} = action.payload;
        const index = state.userDetails.findIndex(ele=>ele.userId===userId);
        if(index!==-1){
            state.userDetails[index].userPassword = newPassword;
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUpUser, resetUserPassword } = counterSlice.actions

export default counterSlice.reducer