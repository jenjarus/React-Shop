export function setProductToBasket(data) {
    return {
        type: 'SET_PRODUCT_TO_BASKET',
        item: data,
    }
}

export function editProductCount(id, qty) {
    return {
        type: 'EDIT_PRODUCT_COUNT',
        id: id,
        qty: qty,
    }
}

export function deleteProduct(id) {
    return {
        type: 'DELETE_PRODUCT',
        id: id,
    }
}

