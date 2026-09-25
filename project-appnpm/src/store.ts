import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productService";
import { employeeApi } from "./services/employeeService";
import { postApi } from "./services/postServices";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [postApi.reducerPath]:postApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(employeeApi.middleware)
      .concat(postApi.middleware)
});