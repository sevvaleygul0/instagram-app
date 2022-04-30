import axios from 'axios';
import {POST_DATA_URL} from './constants';

export const fetchPostData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(POST_DATA_URL)
        .then(response => {
          response && resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
