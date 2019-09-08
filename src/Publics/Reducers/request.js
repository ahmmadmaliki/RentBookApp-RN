const initialState = {
    Request: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const request = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_REQUEST_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_REQUEST_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_REQUEST_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          Request: action.payload.data.data,
        };
      default:
        return state;
    }
  };
  export default request;