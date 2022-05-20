import { createSlice } from '@reduxjs/toolkit';

const initState = {
    shopProducts: [],
    searchProducts: '',
};

const shopSlice = createSlice({
    name: 'shop',
    initialState: initState,
    reducers: {
        setShopProducts: (state, action) => {
            return (state = {
                ...state,
                shopProducts: action.payload,
            });
        },
        filterByOrder: (state, action) => {
            switch (action.payload) {
                case 'price_asc':
                    state.shopProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price_desc':
                    state.shopProducts.sort((a, b) => b.price - a.price);
                    break;
                default:
                    return state;
            }
        },
        searchByName: (state, action) => {
            return (state = {
                ...state,
                searchProducts: action.payload,
            });
        },
    },
});

const { reducer, actions } = shopSlice;

export const { setShopProducts, filterByOrder, searchByName } = actions;

export default reducer;