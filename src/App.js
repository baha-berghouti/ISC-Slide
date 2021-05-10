import './App.css';
import ImageSlider from './components/ImageSlider';
import HomeSlider from './components/HomeSlider';
import { SliderData } from './components/ImageSliderData';
import{HomeSliderData} from './components/HomeSliderData' ;



function App() {
  return(
          //  <HomeSlider slides={HomeSliderData} />
           <ImageSlider slides={SliderData}/>
  )

}

export default App;
