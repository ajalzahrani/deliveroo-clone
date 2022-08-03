import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const restaurantSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurnt = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurnt.items;

export default restaurantSlice.reducer;