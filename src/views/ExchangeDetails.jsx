import ExchangeChart from "../components/ExchangeChart"
import ExchangeDetail from "../components/ExchangeDetail"

const ExchangeDetails = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <div className="min-h-screen light-mode-gradient dark:dark-mode-gradient">
        <ExchangeDetail darkMode={darkMode}/>
        <ExchangeChart darkMode={darkMode}/>
    </div>
    </div>
  )
}

export default ExchangeDetails