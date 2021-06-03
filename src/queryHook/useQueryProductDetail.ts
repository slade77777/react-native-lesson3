import {useQuery} from "react-query";
import axios from "axios";
import {baseUrl} from "../constant";

export const useQueryProductDetail = (id: number) => {
    const url = `${baseUrl}product/${id}`;
    return useQuery(['product', id], () => axios.get(url))
}
