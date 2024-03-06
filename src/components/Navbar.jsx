import { useState, useEffect } from 'react';
import axios from 'axios';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const Navbar = ({ darkMode, toggleDarkMode }) => {
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
    <div className={`${darkMode && "dark"}`}>
    <div className='h-16 bg-slate-700 flex justify-start items-center'>
      <div className='ml-5 hover:scale-105'>
        <RxHamburgerMenu style={{ fontSize: '3rem', color: 'orange'}} />
      </div>
      <div className='pl-10 w-2/3 flex justify-center'>
        <input
          className="p-2 px-4 w-full mx-auto border-2 rounded-xl border-black opacity-50 text-black"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder='Enter the name of coin...'
        />
        {/* {response && (
          <div>
            {JSON.stringify(response.coins)}
          </div>
        )} */}
      </div>
      <div className='fixed top-[12px] right-4 group'>
        <div className=' bg-slate-800 dark:bg-gradient-to-r from-rose-400 via-orange-500 to-yellow-500 rounded-lg blur absolute -inset-1 opacity-75 group-hover:opacity-100 group-hover:duration-500'></div>
        <button
          className='relative px-5 py-2 rounded-lg leading-none dark:bg-black bg-slate-400'
          onClick={toggleDarkMode}
        >
          {darkMode ? <IoMdSunny style={{ fontSize: '1.5rem', color: 'orange' }} /> : <IoMoon style={{ fontSize: '1.5rem' }} />}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
