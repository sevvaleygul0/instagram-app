import {useRef, useState} from 'react';
import axios from 'axios';
import {DISCOVERY_DATA_URL, POST_DATA_URL} from '../api/constants';
import {IDiscoveryData, IPostData} from '../models';

const useAPI = () => {
  const [postList, setPostList] = useState<IPostData[]>([]);
  const [discoveryList, setDiscoveryList] = useState<IDiscoveryData[]>([]);

  const reset = () => {
    setPostList([]);
    setDiscoveryList([]);
  };

  const fetchPostList = () => {
    try {
      axios
        .get(POST_DATA_URL)
        .then(response => {
          if (response) {
            setPostList(response.data);
          }
        })
        .catch(() => {
          setPostList([]);
        });
    } catch (error) {
      setPostList([]);
    }
  };

  const fetchDiscoveryList = () => {
    try {
      axios
        .get(DISCOVERY_DATA_URL)
        .then(response => {
          if (response) {
            setDiscoveryList(response.data);
          }
        })
        .catch(() => {
          setDiscoveryList([]);
        });
    } catch (error) {
      setDiscoveryList([]);
    }
  };

  return {
    postList,
    discoveryList,
    setDiscoveryList,
    reset,
    fetchPostList,
    fetchDiscoveryList,
  };
};

export default useAPI;
