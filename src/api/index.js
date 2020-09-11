import axios from "axios";

export const getData = () => async () =>
    await axios({
        method: "get",
        url: `https://api.ipify.org?format=json`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
    })
    .then((res) => res.data)
    .catch(err => console.log(`getting data was failed`, err))