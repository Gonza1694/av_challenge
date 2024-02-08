import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';

const useGetFiveDaysWeather = (city, country) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!city && !country) return

        const fetchData = async () => {
            try {

                const data = await weatherService.fetchFiveDaysWeather(city, country);
                setData(data);

            } catch (error) {

                setError(error.message);

            } finally {

                    setLoading(false);
            }
        };

        fetchData();
    }, [country, city]);



  return { data, loading, error };
};

export default useGetFiveDaysWeather;
