// Dependencies
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetRequest = (endpoint, options = {}) => {
  const { params = {}, onSuccess, onError } = options;

  const [request, setRequest] = useState({
    data: {},
    error: null,
    loading: false,
  });

  const handleGetRequest = async () => {
    if (!request.loading) {
      setRequest({ ...request, loading: true });
    }

    try {
      const response = await axios.get(endpoint, { params });

      setRequest({
        data: response.data,
        error: null,
        loading: false,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (error) {
      setRequest({
        data: {},
        error,
        loading: false,
      });

      if (onError) {
        onError(error);
      }
    }
  };

  // useEffect(() => {
  //   handleGetRequest();
  // }, [JSON.stringify(params)]);

  return [request, handleGetRequest];
};

export default useGetRequest;
