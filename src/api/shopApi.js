import axiosClient from "./axiosClient"

const shopApi = {
    getAll: (params) => {
        const url = `/best-foods`
        return axiosClient.get(url, { params })
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
};

export default shopApi;