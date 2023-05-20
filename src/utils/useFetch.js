import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        setResponse(response);
        return response.json();
      })
      .then((infoJson) => {
        setData(infoJson);
        setLoading(false);
        console.log(infoJson);
      })
      .catch((_error) => {
        setError(_error);
      });
  }, [url]);

  return [data, loading, response, error];
};

export default useFetch;
