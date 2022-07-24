



import * as types from "./actionTypes";

const initState = {
 
  error: "",
  loading: false,
 
  cart:[],
  
};
export const mealReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
   

      case types.ADD_PRODUCT_CART_REQUEST:
        return {
          ...state,
          error: "",
          loading: true,
        };
      case types.ADD_PRODUCT_CART_SUCCESS:
        return {
          ...state,
          cart:[...state.cart,payload],
          error: "",
          loading: false,
        };
      case types.ADD_PRODUCT_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload,
        };
 
        case types.FETCH_CART_REQUEST:
          return {
            ...state,
            error: "",
            loading: true,
          };
        case types.FETCH_CART_SUCCESS:
          return {
            ...state,
            cart:[...payload],
            error: "",
            loading: false,
          };
        case types.FETCH_CART_FAILURE:
          return {
            ...state,
            loading: false,
            error: payload,
          };
       
          case types.REMOVE_PRODUCT_CART_REQUEST:
            return {
              ...state,
              error: "",
              loading: true,
            };
         
          case types.REMOVE_PRODUCT_CART_FAILURE:
            return {
              ...state,
              loading: false,
              error: payload,
            };
        //     case types.FETCH_ORDER_REQUEST:
        //       return {
        //         ...state,
        //         error: "",
        //         loading: true,
        //       };
        //     case types.FETCH_ORDER_SUCCESS:
        //       return {
        //         ...state,
        //         order:[...payload],
        //         error: "",
        //         loading: false,
        //       };
        //     case types.FETCH_ORDER_FAILURE:
        //       return {
        //         ...state,
        //         loading: false,
        //         error: payload,
        //       };


    default:
      return state;
  }
};
