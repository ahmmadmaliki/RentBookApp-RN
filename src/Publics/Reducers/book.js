const initialState = {
    BookList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const book = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_BOOK_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_BOOK_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_BOOK_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          BookList: action.payload.data.data,
        };
      default:
        return state;
    }
  };
  export default book;