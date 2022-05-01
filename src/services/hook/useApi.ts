import {useState} from 'react';
import axios from 'axios';
import {DISCOVERY_DATA_URL, POST_DATA_URL} from './constants/index';
import {IDiscoveryData, IPostData} from '../models';

const useAPI = () => {
  const [postList, setPostList] = useState<IPostData[]>([]);
  const [discoveryList, setDiscoveryList] = useState<IDiscoveryData[]>([]);

  const [backupDiscoveryList, setBackupDiscoveryList] = useState<
    IDiscoveryData[]
  >([]);

  const reset = () => {
    setPostList([]);
    setDiscoveryList([]);
  };

  const fetchPostList = () => {
    try {
      axios
        .get(POST_DATA_URL)
        .then(response => {
          response && setPostList(response.data);
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
            setBackupDiscoveryList(response.data);
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
    backupDiscoveryList,
    setDiscoveryList,
    reset,
    fetchPostList,
    fetchDiscoveryList,
  };
};

export default useAPI;
