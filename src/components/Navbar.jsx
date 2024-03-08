import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [nav, setNav] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleNav = () => {
    setNav(!nav);
  };

  const items = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Exchanges', link: '/exchanges' },
    { id: 3, name: 'Coins', link: '/coins' },
    { id: 4, name: 'News', link: '/news' },
  ];

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

        <ul className='hidden md:flex'>
          {items.map(item => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            >
               <Link to={item.link} onClick={handleNav}>
              {item.name}
               </Link>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='ml-5 block md:hidden'>
          {nav ? <AiOutlineClose style={{ color: 'orange', fontSize: '2rem' }} /> : <AiOutlineMenu style={{ color: 'orange', fontSize: '2rem' }} />}
        </div>
        <ul
          className={
            nav
              ? 'z-50 fixed md:hidden left-0 top-16 w-[50%] ease-in-out duration-500'
              : 'ease-in-out w-[50%] duration-500 fixed  top-16 bottom-0 left-[-100%]'
          }
        >
          {items.map(item => (
            <li
              key={item.id}
              className='p-2 pl-10 border-b rounded-tr-xl rounded-br-xl bg-gray-500 hover:bg-orange-400 duration-300 text-md md:text-lg font-semibold text-black cursor-pointer border-gray-600'
            >
               <Link to={item.link} onClick={handleNav}>
              {item.name}
               </Link>
            </li>
          ))}
        </ul>

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
          <div className=' bg-slate-800 dark:bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg blur absolute -inset-1 opacity-75 group-hover:opacity-100 group-hover:duration-500'></div>
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
<AiOutlineClose />