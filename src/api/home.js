import Axios from "axios";

function getHomeTop(){
  return Axios.get('http://192.168.0.1/home/sum');
}
// 待处理事务
function todoData(){
  return Axios.get('http://192.168.0.1/home/todo')
}
// 总览
function overViewData(){
  return Axios.get('http://192.168.0.1/home/overView')
}
// 订单总数
function orderSaleCom(){
  return Axios.get('http://192.168.0.1/home/orderLeft')
}
export{
  getHomeTop,
  todoData,
  overViewData,
  orderSaleCom
} 