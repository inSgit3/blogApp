import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const abortC = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortC.signal })
        .then((res) => {
          if (!res.ok) {
            navigate("NotFound404");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortC.abort();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
