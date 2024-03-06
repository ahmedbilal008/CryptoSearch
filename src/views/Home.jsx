import Exchanges from "../components/Exchanges";
import GlobalStats from "../components/GlobalStats";
import Markets from "../components/Markets";
import Trending from "../components/Trending";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiDogecoin } from "react-icons/si";


const Home = ({darkMode}) => {
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
        <Exchanges darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default Home