import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name : "user" ,
    initialState : {
        name : "", 
        email : ""
    } , 
    reducers : {
        addUser :(state , action)=> {
            state.name = action.payload.name ;
            state.email = action.payload.email;
        }
    },

})

export const {addUser} = UserSlice.actions 

export default UserSlice.reducer