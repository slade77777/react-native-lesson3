import {useQuery} from "react-query";
import axios from "axios";
import {baseUrl} from "../constant";

export const useQueryProducts = () => {
    const url = `${baseUrl}product`;
    return useQuery('products', () => axios.get(url))
}
