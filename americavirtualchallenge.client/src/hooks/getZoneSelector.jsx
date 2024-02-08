import { useState, useEffect } from 'react';

const useGetZoneSelector = (fileName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/countries.json`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
          setLoading(false);
      }
    };

    fetchData();
  }, [fileName]);

  return { data, loading, error };
};

export default useGetZoneSelector;
