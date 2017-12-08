import axios from 'axios';

const ROOT_URL = `https://api.mercadolibre.com/items`

export const SEARCH_DETAIL = 'SEARCH_DETAIL';

export const fetchDetail = (id) => {
    let url = `${ROOT_URL}/${id}`
    const request = axios.get(url);

    return {
        type: SEARCH_DETAIL,
        payload: request
    }
}
