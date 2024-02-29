import React from 'react'
import useAxios from '../hooks/useAxios'
import CoinTrending from './CoinTrending';

const Trending = () => {
  const {response} = useAxios('/search/trending');
    console.log(response);
  return (
    <div>
      {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item}/>)}
    </div>
  )
}

export default Trending