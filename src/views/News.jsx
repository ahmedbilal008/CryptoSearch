import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = ({ darkMode }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summaries, setSummaries] = useState({}); // Store summaries for each article
  const [currentSummary, setCurrentSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://news-api14.p.rapidapi.com/search?q=Cryptocurrency',
        headers: {
          'X-RapidAPI-Key': 'fbc63987bbmsha8b0b7360e43d01p17f0d8jsn9fc6e8ad44d8',
          'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSummarize = async (url) => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', { url });
      setSummaries(prevSummaries => ({
        ...prevSummaries,
        [url]: response.data
      }));
      setCurrentSummary(response.data);
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  };

  const closeSummary = () => {
    setCurrentSummary(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching news data</div>;
  }

  const limitWords = (text, limit) => {
    const words = text.split(' ');
    return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="light-mode-gradient dark:dark-mode-gradient">
        <div className="p-5 md:p-10 lg:p-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <h2 className="col-span-full text-2xl text-black dark:text-gray-400 font-bold mb-4">Top Crypto News</h2>
          {news.map((article, index) => (
            <div key={index} className="bg-gray-400 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{limitWords(article.title, 10)}</h3>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-lg hover:underline mt-2 inline-block"
              >
                Read more
              </a>
              <button
                onClick={() => handleSummarize(article.url)}
                className="mt-2 px-4 py-2 ml-5 bg-blue-500 text-white rounded"
              >
                Get Summary
              </button>

              {currentSummary && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-10">
                  <div className="bg-gray-400 p-5 m-7 rounded-lg shadow-lg max-w-lg">
                    <h3 className="text-xl font-bold">{currentSummary.title}</h3>
                    <p className="mt-2">{currentSummary.summary}</p>
                    <button
                      onClick={closeSummary}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
