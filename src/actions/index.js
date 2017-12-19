export const selectBook = (book) => {
    // selectBook is an action creactor and it needs to return
    // an object with action type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}