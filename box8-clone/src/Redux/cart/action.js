import * as types from "./actionTypes";
import axios from 'axios'

const addProductCartRequest = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_REQUEST,
      payload: payload,
    };
  };
  const addProductCartSuccess= (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_SUCCESS,
      payload: payload,
    };
  };
  
  const addProductCartFailure = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_FAILURE,
      payload: payload,
    };
  };
  

  const addProductCart = (payload) => (dispatch) => {
  const {meal_name,meal_price,meal_desc}=payload;
 // console.log(meal_name,meal_price,meal_desc,"data")
    dispatch(addProductCartRequest());
  axios.post("http://localhost:8080/cart",{
    meal_name,
    meal_price,
    meal_desc
  })
      .then((r) =>
     
       dispatch(addProductCartSuccess(r.data)))

      .catch((e) => dispatch(addProductCartFailure(e.data)));
  };
  

  const fetchCartRequest = (payload) => {
    return {
      type: types.FETCH_CART_REQUEST,
      payload: payload,
    };
  };
  const fetchCartSuccess= (payload) => {
    return {
      type: types.FETCH_CART_SUCCESS,
      payload: payload,
    };
  };
  
  const fetchCartFailure = (payload) => {
    return {
      type: types.FETCH_CART_FAILURE,
      payload: payload,
    };
  };
  

  const fetchCart = () => (dispatch) => {
    dispatch(fetchCartRequest());
  
    axios({
        url:"http://localhost:8080/cart"
    })
      .then((r) => dispatch(fetchCartSuccess(r.data)))
      .catch((e) => dispatch(fetchCartFailure(e.data)));
  };
  


  const  deleteProductCartRequest= (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_REQUEST,
      payload: payload,
    };
  };
  const deleteProductCartSuccess= (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_SUCCESS,
      payload: payload,
    };
  };
  
  const deleteProductCartFailure = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_FAILURE,
      payload: payload,
    };
  };


  const deleteProductCart = (id) => (dispatch) => {
    dispatch(deleteProductCartRequest());
  
    axios.delete(`http://localhost:8080/cart/${id}`)
      .then((r) => dispatch(deleteProductCartSuccess(r.data)))
      .then(()=>dispatch(fetchCart()))
      .catch((e) => dispatch(deleteProductCartFailure(e.data)));
  };
  
export {
    fetchCart,addProductCart,deleteProductCart
}

