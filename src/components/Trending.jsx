import React from 'react'
import useAxios from '../hooks/useAxios'
import CoinTrending from './CoinTrending';
import LoadingBar from './LoadingBar';

const Trending = ({ darkMode }) => {
  const { response, loading } = useAxios('/search/trending');
  console.log(response);

  if (loading) {
    return (
      <div className="wrapper-container mt-10">
        <LoadingBar className="h-8 w-32" />
        <LoadingBar className="h-8 w-full mt-4" />
      </div>
    )
  }
  return (
    <div className='mt-10'>
      <div className='text-2xl text-gray-400 font-bold'>
        Trending cryptocurrencies
      </div>
    <div className='w-full inline-flex flex-nowrap mt-5 overflow-hidden'>
      <ul className='flex items-center justify-center md:justify-start [&_li]:mx-5 animate-infinite-scroll'>
        {response && response.coins.map(coin => <li><CoinTrending key={coin.item.coin_id} coin={coin.item} darkMode={darkMode} /></li>)}
      </ul>
    </div>
    </div>
  )
}

export default Trending