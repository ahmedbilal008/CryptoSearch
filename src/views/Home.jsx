import { useState } from "react";
import Exchanges from "../components/Exchanges";
import GlobalStats from "../components/GlobalStats";
import Markets from "../components/Markets";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiDogecoin } from "react-icons/si";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen light-mode-gradient dark:dark-mode-gradient">
        <div className="flex justify-center space-x-5 p-20 pb-5">
          <FaBitcoin className="animate-bounce animation-delay-1 animate-duration-4s" style={{ fontSize: '8rem', color: 'orange' }} />
          <FaEthereum className="animate-bounce animation-delay-3 animate-duration-4s" style={{ fontSize: '8rem', color: 'gray' }} />
          <div className="font-bold font-sans text-4xl text-black dark:text-orange-500">
            Crypto
            <div className=" font-bold font-sans text-4xl text-orange-600 dark:text-slate-600">Search</div>
          </div>
          <SiTether className="animate-bounce animation-delay-2 animate-duration-4s" style={{ fontSize: '8rem', color: 'gray' }} />
          <SiDogecoin className="animate-bounce animation-delay-4 animate-duration-4s" style={{ fontSize: '8rem', color: 'orange' }} />
        </div>
        <Trending darkMode={darkMode} />
        <div className="flex lg:flex-row flex-col">
          <Markets darkMode={darkMode} />
          <GlobalStats darkMode={darkMode} />
        </div>
        <Exchanges />
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
  )
}

export default Home