export function setProductToFavorite(id) {
    return {
        type: 'SET_PRODUCT_TO_FAVORITE',
        id: id,
    }
}

export function deleteProductToFavorite(id) {
    return {
        type: 'DELETE_PRODUCT_TO_FAVORITE',
        id: id,
    }
}
