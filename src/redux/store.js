import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import nhomQuyenReducer from "./nhomQuyenSlice"

export default configureStore(
	{
		reducer: {
			user: userReducer,
			nhomquyen: nhomQuyenReducer,
		}
	}
)