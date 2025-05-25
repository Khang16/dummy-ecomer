import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Đoạn code này định nghĩa các kiểu và hooks để làm việc với Redux store một cách an toàn về kiểu dữ liệu (type-safe):
// RootState: Kiểu dữ liệu của toàn bộ state.
// AppDispatch: Kiểu dữ liệu của hàm dispatch.
// useAppDispatch: Custom hook để dispatch actions.
// useAppSelector: Custom hook để lấy dữ liệu từ store.
// Mục đích chính là tăng cường type safety và giảm boilerplate code khi sử dụng Redux trong ứng dụng React.
