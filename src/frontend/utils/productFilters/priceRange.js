const getPriceProducts = (products, price) => {
    return products.filter(item => item.price <= price);
}

export {getPriceProducts};