import axios from 'axios';

const getProductListService = async () => {
    const response = await axios.get('/api/products');
    if(response.status === 200)
        return response.data.products;
    else
        return false;
}

export {getProductListService};