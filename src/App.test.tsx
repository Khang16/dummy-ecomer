import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import authReducer from "./modules/reduxs/auths/authSlice"; // Import reducer

// Tạo mock store
const store = configureStore({
  reducer: {
    auth: authReducer, // Thêm các reducer khác nếu cần
  },
});

test("renders simple content", () => {
  render(<div>List user</div>);
  const element = screen.getByText(/list user/i);
  expect(element).toBeInTheDocument();
});