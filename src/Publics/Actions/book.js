import axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: axios.get ('http://192.168.100.183:3030/bookrent/book')
  };
};
export const borrowBook=(data)=>{
  return{
    type: 'BORROW_BOOK',
    payload: axios.post('http://192.168.100.183:3030/bookrent/request',data)
  }
}
export const returnBook=(id)=>{
  console.log(id)
  return{
    type: 'RETURN_BOOK',
    payload: axios.patch('http://localhost:3030/bookrent/return', id)
  }
}