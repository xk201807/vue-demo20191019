import Axios from "axios";

function getHomeTop(){
  return Axios.get('http://192.168.0.1/home/sum');
}

export{
  getHomeTop
} 