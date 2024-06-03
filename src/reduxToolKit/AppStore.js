import React from 'react' 
import { configureStore } from "@reduxjs/toolkit";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
}); 

export default AppStore 
