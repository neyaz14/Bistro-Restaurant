import { Helmet } from "react-helmet-async"
import BistroComponents from "../HomeComponents/BistroComponents"
import Featured from "../HomeComponents/Featured "
import MainSlider from "../HomeComponents/MainSlider"
import OrderOnline from "../HomeComponents/OrderOnline"
import PopularMenu from "../HomeComponents/PopularMenu"



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BistroBoss </title>
        <meta name="description" content="Welcome to the home page of MyApp." />
      </Helmet>
    
      <MainSlider></MainSlider>
      <OrderOnline></OrderOnline>
      <BistroComponents></BistroComponents>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  )
}

export default Home
