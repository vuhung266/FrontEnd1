import { createSlice } from '@reduxjs/toolkit';

export const nhomQuyenSlice = createSlice({
    name: 'nhomquyen',
    initialState: {
        data: [
			{
				key: '1',
				tenhomquyen: 'SuperAdmin',
				mota: 'Có vai trò quản trị hệ thống',
				isactive: 'hoatdong',
			},
			{
				key: '2',
				tenhomquyen: 'Admin',
				mota: 'Admin vận hành',
				isactive: 'hoatdong',
			},
			{
				key: '3',
				tenhomquyen: 'CustomerServive',
				mota: 'Vận hành',
				isactive: 'khoa',
			},
			{
				key: '4',
				tenhomquyen: 'Guest',
				mota: 'Khách, kế toán, thanh toán',
				isactive: 'hoatdong',
			},
		]
    },
    reducers: {
        insert: (state, action) => {
            state.data = [...state.data, action.payload];
        },
    },
});

export const { insert } = nhomQuyenSlice.actions;
export default nhomQuyenSlice.reducer;
