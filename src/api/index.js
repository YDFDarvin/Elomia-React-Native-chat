import axios from "axios";
import {DOMAIN_HOST} from "../consts";
import stringify from "qs-stringify";

export const getProducts = (categoryId) => async () =>
    await axios({
        method: "post",
        url: `${DOMAIN_HOST}get-toplists-products`,
        data: stringify({
            topListId: categoryId,
            authToken: "n8Ld9dVwJPtOlSbBFyaGpphy14A42Ili"
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
    })
    .then((res) => res.data)
    .catch(err => console.log(`getting products of ${categoryId} toplist was failed`, err))