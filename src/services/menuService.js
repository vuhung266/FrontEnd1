import * as httpRequest from '../utils/httpRequest';

export const getAllMenu = async () => {
    try {
        const res = await httpRequest.get('http://localhost:4000/menus', {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getMenu = async (data) => {
    try {
        const res = await httpRequest.get(`http://localhost:4000/menus`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const editMenu = async (data) => {console.log(data)
    // var bodyFormData = new FormData();
    // bodyFormData.append('name', data.name);
    // bodyFormData.append('pid', data.pid);
    // bodyFormData.append('order', data.order);
    // try {
    //     const res = await httpRequest.post(`http://localhost:4000/menus/${data.id}`, bodyFormData);
    //     return res;
    // } catch (error) {
    //     console.log(error);
    // }
};
