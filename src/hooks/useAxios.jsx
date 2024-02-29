import React, { useState, useEffect } from 'react'
import axios from 'axios';
const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const API_KEY = 'CG-XgNKMrUjo4YbWGLq2oRrWZ1g';

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3/';

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url, {
                params: {
                    x_cg_demo_api_key: API_KEY,
                },
            });
            setResponse(res.data);
            setLoading(false);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData(url);
    }, []);
    return {
        response, loading, error
    }
}

export default useAxios