import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name:"",
            password:"",
            authUser:false
        }
    },
    reducers:{
        login(state,action){
            const userDetails = action.payload;
            console.log(userDetails,"userdetails")
            const emailValidation = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/i.test(userDetails.name);
            const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,10})/i.test(userDetails.password)
            state.user = userDetails;
            if(!emailValidation ||  !passwordValidation){
                state.user.authUser =  false;
            }
            else{
                state.user.authUser =  true;
                const saveUser = JSON.stringify(userDetails);
                sessionStorage.setItem("authUser", saveUser)
            }

        },
        logout(state,history){
            console.log(history,"navigte")
            state.user = {
                name:"",
                password:"",
                authUser:false
            }
            sessionStorage.clear();
            window.location.href = '/';
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
