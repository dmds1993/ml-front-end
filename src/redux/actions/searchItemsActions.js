import axios from 'axios';

const ROOT_URL = `https://api.mercadolibre.com/sites/MLA/search`

export const SEARCH_ITEMS = 'SEARCH_ITEMS';

export const fetchItems = (item) => {
    let url = ROOT_URL;
    const request = axios.get(url, {
      params: {
        q: item
      }
    });

    return {
        type: SEARCH_ITEMS,
        payload: request
    }
}
