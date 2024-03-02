import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        try {
          const result = await axios.get(`search?query=${searchQuery}`);
          setResponse(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <div>Navbar</div>
      {response && (
        <div>
          {JSON.stringify(response)}
        </div>
      )}
    </div>
  );
};

export default Navbar;
