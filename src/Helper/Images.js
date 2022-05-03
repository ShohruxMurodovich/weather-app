import Storm from "../Assets/Images/storm.gif"
import Drizzle from "../Assets/Images/drizzle.gif"
import Rain from "../Assets/Images/rain.gif"
import Snow from "../Assets/Images/snow.gif"
import Atmosphere from "../Assets/Images/atmosphere.gif"
import Day from "../Assets/Images/day.gif"
import Cloud from "../Assets/Images/cloud.gif"




const Images = ({ code }) => {
  if (code >= 200 && code <= 232) {
    return <img src={Storm} alt="Icon"></img>
  }
  if (code >= 300 && code <= 321) {
    return <img src={Drizzle} alt="Icon"></img>
  }
  if (code >= 500 && code <= 531) {
    return <img src={Rain} alt="Icon"></img>
  }
  if (code >= 600 && code <= 622) {
    return <img src={Snow} alt="Icon"></img>
  }
  if (code >= 700 && code <= 781) {
    return <img src={Atmosphere} alt="Icon"></img>
  }
  if (code == 800) {
    return <img src={Day} alt="Icon"></img>
  }
  if (code >= 801 && code <= 804) {
    return <img src={Cloud} alt="Icon"></img>
  }
}

export default Images;