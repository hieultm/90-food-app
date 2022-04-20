// import shopApi from "../api/shopApi"
// //import { setShopProducts } from '../features/Shop/shopSlice';
// import { createContext } from 'react';
// //import { useDispatch } from 'react-redux';

// //import { useHistory } from 'react-router-dom';

// const apiContext = createContext();

// const ApiProvider = ({ children }) => {
//     //const history = useHistory()
//     //const dispatch = useDispatch();

//     const getProducts = async () => {
//       const res = await shopApi.getAll()
//       console.log(res);
//     }

//     return ( 
//         <apiContext.Provider value = {
//             { getProducts } } >
//         { children } 
//         </apiContext.Provider>
//     )
// }

// export { apiContext };
// export default ApiProvider;