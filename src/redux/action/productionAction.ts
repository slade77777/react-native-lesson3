import axios from 'axios';
import {baseUrl} from '../../constant';
import {Dispatch} from '@reduxjs/toolkit';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING';

export const getProducts = () => (dispatch: Dispatch) => {
  dispatch({
    type: SET_PRODUCTS_LOADING,
  });
  const url = `${baseUrl}product`;
  axios
    .get(url)
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        data: res.data,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
