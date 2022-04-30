import axios from 'axios';
import {DISCOVERY_DATA_URL, POST_DATA_URL} from './constants';

export const fetchPostData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(POST_DATA_URL)
        .then(response => {
          response && resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchDiscoveryData = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(DISCOVERY_DATA_URL)
        .then(response => {
          response && resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
