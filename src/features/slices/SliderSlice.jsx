import { createSlice, configureStore } from '@reduxjs/toolkit'
import { sliderData } from '../../assets/dummyData';



export const sliderSlice = createSlice({
    
    name: "slider",
    initialState: {
        value: 0,
        length:sliderData.length
    },
    
    reducers: {
        nextSlide(state, action){
          //  console.log("action", action.payload);
          //  console.log("state", state);
            state.value = action.payload >= state.length ? 0 : action.payload;
        },
        prevSlide(state, action) {
            state.value = action.payload < 1 ?  state.length- 1: action.payload;
        },
        dotSlide(state, action) {
            const slide = action.payload;
            state.value = slide;
           // console.log(slide,"dot")
        }
    }
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;