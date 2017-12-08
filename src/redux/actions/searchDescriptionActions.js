import axios from 'axios';

const ROOT_URL = `https://api.mercadolibre.com/items`

export const SEARCH_DESCRIPTION = 'SEARCH_DESCRIPTION';

export const fetchDescription = (id) => {
    let url = `${ROOT_URL}/${id}/description`
    const request = axios.get(url);

    return {
        type: SEARCH_DESCRIPTION,
        payload: request
    }
}
