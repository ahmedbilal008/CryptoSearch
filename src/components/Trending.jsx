import React from 'react'
import useAxios from '../hooks/useAxios'
import CoinTrending from './CoinTrending';
import LoadingBar from './LoadingBar';

const Trending = () => {
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
    <div>
      {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
    </div>
  )
}

export default Trending