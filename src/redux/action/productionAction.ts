import axios from 'axios';
import {baseUrl} from '../../constant';
import {Dispatch} from '@reduxjs/toolkit';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING';

export const getProducts = () => {
  const url = `${baseUrl}product`;
  return axios.get(url);
};
