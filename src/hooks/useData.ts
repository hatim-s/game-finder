import { useState, useEffect } from "react";
import api from "../services/api";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<DataResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
