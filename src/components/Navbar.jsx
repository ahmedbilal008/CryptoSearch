import { useState, useEffect } from 'react';
import axios from 'axios';
import { RxHamburgerMenu } from "react-icons/rx";

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
    <div className='h-16 bg-slate-700 flex justify-start items-center'>
      <div>
        <RxHamburgerMenu style={{ fontSize: '3rem', color: 'orange' }} />
      </div>
      <div className='pl-10 w-2/3 flex justify-center'>
        <input className="p-2 px-4 w-full mx-auto border-2 rounded-xl border-black opacity-50 text-black" type="text" value={searchQuery} onChange={handleInputChange} placeholder='Enter the name of coin...' />
        {/* {response && (
          <div>
            {JSON.stringify(response.coins)}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
