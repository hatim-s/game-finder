import { useState, useEffect } from "react";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      api
        .get<DataResponse<T>>(endpoint, { ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
