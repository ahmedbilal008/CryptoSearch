import CoinChart from "../components/CoinChart"
import CoinDetail from "../components/CoinDetail"

const CryptoDetails = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <div className="min-h-screen light-mode-gradient dark:dark-mode-gradient">
      <CoinDetail darkMode={darkMode}/>
      <CoinChart darkMode={darkMode}/>
    </div>
    </div>
  )
}

export default CryptoDetails