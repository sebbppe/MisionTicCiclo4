import axios from "axios";
import { AccordionCollapse } from "react-bootstrap";

import { ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_FAIL,CLEAR_ERRORS
, PRODUCT_DETAILS_REQUEST,
PRODUCT_DETAILS_SUCCESS,
PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

export const getProducts=()=> async(dispatch)=>{
    try{
        dispatch({type: ALL_PRODUCTS_REQUEST})
        const {data} =await axios.get('api/productos')
        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
};
export const getProductsDetails=(id)=> async(dispatch)=>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} =await axios.get(`API/producto/:${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};


export const clearErrors=()=> async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}
