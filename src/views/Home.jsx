import Exchanges from "../components/Exchanges"
import GlobalStats from "../components/GlobalStats"
import Markets from "../components/Markets"
import Navbar from "../components/Navbar"
import Trending from "../components/Trending"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <GlobalStats/>
      <Trending />
      <Markets />
      <Exchanges/>

    </div>
  )
}

export default Home