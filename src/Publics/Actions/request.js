import axios from 'axios';

export const getRequest = () => {
  return {
    type: 'GET_REQUEST',
    payload: axios.get ('http://192.168.100.183:3030/bookrent/request'),
  };
};
