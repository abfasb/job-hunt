import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name:'application',
    initialState:{
        applicants:null,
    },
    reducers:{
        setAllApplicants:(state,action) => {
            state.applicants = action.payload;
        }
    }
});
// add slices for the authStore
export const {setAllApplicants} = applicationSlice.actions;
export default applicationSlice.reducer;
