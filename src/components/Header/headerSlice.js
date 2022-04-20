import { createSlice } from "@reduxjs/toolkit";


const headerSlice = createSlice({
    name: "Header",
    initialState: {
        isShowCart: false,
    },
    reducers: {
        setIsShowCart: (state, action) => {
            return (state = {
                ...state,
                isShowCart: action.payload
            })
        }
    }
})

const { reducer, actions } = headerSlice
export const { setIsShowCart } = actions
export default reducer