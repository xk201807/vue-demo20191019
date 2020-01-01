<template>
  <div class="home">
    <div class="cards_box">
      <div class="cards_left">
        <ul>
          <li class="card_item">
            <h1 class="title" @click='popup'>后台项目</h1>
            <p><a href="#">mall</a></p>
            <div class="popBox" v-show="isPopShow">
              <ul>
                <li>
                  <router-link to='/ProductList'>
                    <img src="" alt="">
                    <span>数据来源</span>
                  </router-link>
                  <router-link to='/ProductList'>
                    <img src="" alt="">
                    <span>数据来源</span>
                  </router-link>
                  <router-link to='/ProductList'>
                    <img src="" alt="">
                    <span>数据来源</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="card_item">
            <h1>前端项目</h1>
            <p><a href="#">mall-admin-web</a></p>
          </li>
          <li class="card_item">
            <h1>学习教程</h1>
            <p><a href="#">mall-learning</a></p>
          </li>
          <li class="card_item card_detail">
            <img src="" alt=""/>
            <div class="detail_item">
              <span>今日订单总数</span>
              <span>{{detailData.totalOrder}}</span>
            </div>
          </li>
          <li class="card_item card_detail">
            <img src="" alt=""/>
            <div class="detail_item">
              <span>今日销售总额</span>
              <span>￥{{detailData.saleTotal}}</span>
            </div>
          </li>
          <li class="card_item card_detail">
            <img src="" alt=""/>
            <div class="detail_item">
              <span>昨日销售总数</span>
              <span>￥{{detailData.yesterdayTotal}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="card_right">

      </div>
    </div>
    <div class="todo_box">
      <h1 class="title">待处理事务</h1>
      <div class="todo_content">
        <ul>
          <li>
            <div class="todo_item">
              <p>
                待付款订单
              </p>
                <span>（{{todoDataList.orderTobePaid}}）</span>
            </div>
            <div class="todo_item">
              <p>
                待发货订单
              </p>
                <span>（{{todoDataList.pendingOrders}}）</span>
            </div>
            <div class="todo_item">
              <p>
                已发货订单
              </p>
                <span>（{{todoDataList.ShippedOrder}}）</span>
            </div>
          </li>
          <li>
            <div class="todo_item">
              <p>
                已完成订单
              </p>
                <span>（{{todoDataList.completedOrder}}）</span>
            </div>
            <div class="todo_item">
              <p>
                新缺货登记
              </p>
                <span>（{{todoDataList.NewShortageRegister}}）</span>
            </div>
            <div class="todo_item">
              <p>
                待处理退货订单
              </p>
                <span>（{{todoDataList.PendingReturnOrder}}）</span>
            </div>
          </li>
          <li>
            <div class="todo_item">
              <p>
                待确认收货订单
              </p>
                <span>（{{todoDataList.ReceivingOrder}}）</span>
            </div>
            <div class="todo_item">
              <p>
                待处理退款申请
              </p>
                <span>（{{todoDataList.PendingRefundApplication}}）</span>
            </div>
            <div class="todo_item">
              <p>
                广告位即将到期
              </p>
                <span>（{{todoDataList.AdvSpaceToExpire}}）</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="overView_box">
      <div class="productOverView_box">
        <h1 class="title">商品总览</h1>
        <ul>
          <li>
            <span>{{overViewDataList.hasBeenOff}}</span>
            <span>已下架</span>
          </li>
           <li>
            <span>{{overViewDataList.hasBeenOn}}</span>
            <span>已上架</span>
          </li>
           <li>
            <span>{{overViewDataList.inventoryNervous}}</span>
            <span>库存紧张</span>
          </li>
           <li>
            <span>{{overViewDataList.allGoods}}</span>
            <span>全部商品</span>
          </li>
        </ul>
      </div>
      <div class="userOverView_box">
        <h1 class="title">用户总览</h1>
        <ul>
          <li>
            <span>{{overViewDataList.todayNew}}</span>
            <span>今日新增</span>
          </li>
           <li>
            <span>{{overViewDataList.yesterdayNew}}</span>
            <span>昨日新增</span>
          </li>
           <li>
            <span>{{overViewDataList.monthNew}}</span>
            <span>本月新增</span>
          </li>
           <li>
            <span>{{overViewDataList.totalmembers}}</span>
            <span>会员总数</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="orderStatistics_box">
      <h1 class="title">订单统计</h1>
      <div class="order_l">
        <ul>
          <li>
            <p>本月订单总数</p>
            <p>{{orderSaleComList.monthOrder}}</p>
            <p><span :class="[monthOrderCom > 0 ?'bgGreen':'bgRed']">{{monthOrderCom}}%</span> <span>同比上月</span></p>
          </li>
          <li>
            <p>本周订单总数</p>
            <p>{{orderSaleComList.weekOrder}}</p>
            <p><span :class="[weekOrderCom > 0 ? 'bgGreen':'bgRed']">{{weekOrderCom}}%</span> <span>同比上周</span></p>
          </li>
          <li>
            <p>本月销售总额</p>
            <p>{{orderSaleComList.monthSale}}</p>
            <p><span :class ="[monthSaleCom > 0 ? 'bgGreen':'bgRed']">{{monthSaleCom}}%</span> <span>同比上月</span></p>
          </li>
          <li>
            <p>本周销售总额</p>
            <p>{{orderSaleComList.weekSale}}</p>
            <p><span :class="[weekSaleCom > 0 ? 'bgGreen':'bgRed']">{{weekSaleCom}}%</span> <span>同比上周</span></p>
          </li>
        </ul>
      </div>
      <div class="order_r"></div>
    </div>
    
  </div>
</template>

<script>
import {getHomeTop} from '@/api/home';
import {todoData} from '@/api/home';
import {overViewData} from '@/api/home';
import {orderSaleCom} from '@/api/home';




export default {
  data () {
    return{
      detailData:{},
      todoDataList:{},
      overViewDataList:{},
      orderSaleComList:{},
      isPopShow:false,
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.init()
    })
    this.isPopShow=false
  },
  methods: {
    init () {
      getHomeTop().then(res => {
        this.detailData = res.data
      });
      todoData().then(res=>{
        this.todoDataList = res.data
      });
      overViewData().then(res=>{
        this.overViewDataList = res.data
      });
      orderSaleCom().then(res=>{
        this.orderSaleComList = res.data
      });
      

    },
    popup(){
      console.log(123)
      this.isPopShow = !this.isPopShow;
    }
  },
  computed:{
    monthOrderCom:function(){
      if(this.orderSaleComList.monthOrder && this.orderSaleComList.monthOrder!='0' && this.orderSaleComList.lastMonthOrder){

        let monthOrderNum = (Number(this.orderSaleComList.monthOrder)- Number(this.orderSaleComList.lastMonthOrder))/Number(this.orderSaleComList.monthOrder);
        return Number(monthOrderNum*100).toFixed(2)
      }else{
        return ''
      }
    },
    weekOrderCom:function(){
      if(this.orderSaleComList.weekOrder && this.orderSaleComList.weekOrder!='0' && this.orderSaleComList.lastWeekOrder){
        let weekOrderNum = (Number(this.orderSaleComList.weekOrder)- Number(this.orderSaleComList.lastWeekOrder))/Number(this.orderSaleComList.weekOrder);
        return Number(weekOrderNum *100).toFixed(2)

      }else{
        return ''
      }
    },
    monthSaleCom:function(){
      if(this.orderSaleComList.monthSale && this.orderSaleComList.monthSale!='0' && this.orderSaleComList.lastMonthSale){
        let monthSaleNum = (Number(this.orderSaleComList.monthSale)- Number(this.orderSaleComList.lastMonthSale))/Number(this.orderSaleComList.monthSale);
        return Number(monthSaleNum *100).toFixed(2)

      }else{
        return ''
      }
    },
    weekSaleCom:function(){
      if(this.orderSaleComList.weekSale && this.orderSaleComList.weekSale!='0' && this.orderSaleComList.lastWeekSale){
        let weekSaleNum = (Number(this.orderSaleComList.weekSale)- Number(this.orderSaleComList.lastWeekSale))/Number(this.orderSaleComList.weekSale);
        return Number(weekSaleNum *100).toFixed(2)

      }else{
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;  
}
ul{
  list-style: none;
}
.title{
  text-align: left;
  height: 50px;
  line-height: 50px;
  background: #f2f6fc;
  padding-left: 30px;
  font-size: 16px;
}

.home{
  margin: 0 auto;
  
  .cards_box {
    position: relative;
    .cards_left{
      width: calc(100% - 330px);
      ul{
        width:100%;
        display:flex;
        justify-content :space-between;
        list-style:none;
        flex-wrap: wrap;
        li.card_item{
          text-align:left;
          width:32%;
          border: 1px solid #ddd;
          &:nth-child(1){
            position: relative;
          }
          h1{
            padding-left :30px;
            box-sizing: border-box;
            background :#f2f6fc;
            font-size:16px;
            height :50px;
            line-height:50px;
            width: 100%;
          }
          p{
            padding-left :30px;
            box-sizing: border-box;
            height: 60px;
            line-height: 60px;
          }
        }
        li.card_detail{
          margin-top: 20px;
          padding: 20px 30px;
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          img{
            width:65px;
            height: 67px;
            background: gainsboro;
            margin-right: 15px;
          }
          .detail_item{
            span{
              display: inline-block;
              width: 100%;
              line-height: 25px;
              height: 25px;
            }
            span:nth-child(1){
              color: #909399;
              font-size: 14px;
            }
            span:nth-child(2){
              color: #606266;
              font-size: 14px;
            }
          }
        }
      }
    }
    .card_right{
      position: absolute;
      right: 0;
      top: 0;
      width: 250px;
      height: 235px;
      background: #ddd;
    }
  }
  .todo_box{
    margin-top: 20px;
    border: 1px solid #dcdfe6;
    h1{
      height: 50px;
      line-height: 50px;
      background: #f2f6fc;
      padding-left: 30px;
      text-align: left;
      font-size: 16px;
    }
    .todo_content{
      padding:30px 60px 20px 60px;       
      ul{
        display: flex;
        justify-content: space-around;
        li{
          width: 30%;
          div.todo_item{
            width: 100%;
            border-bottom: 1px solid #ebeef5;
            height: 39px;
            line-height: 39px;
            display: flex;
            justify-content: space-between;
            p{
              padding-left: 10px;
              width: clac('100% - 30px');
            }
          }
        }
      }
    }

  }
  .overView_box{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .productOverView_box,.userOverView_box{
      border: 1px solid #dcdfe6;
      width: 49%;
      h1{
        font-size: 16px;
        padding-left: 30px;
        height: 50px;
        line-height: 50px;
        background: #f2f6fc;
      }
      ul{
        display: flex;
        justify-content: space-around;
        padding: 40px;
        li{
          font-size: 16px;
          span{
            display: inline-block;
            width: 100%;
          }
          span:nth-child(1){
            color: #f56c6c;
            margin-bottom: 10px;
            font-size: 24px;
          }
        }
      }
    }
  }
  .orderStatistics_box{
    margin-top: 20px;
    border: 1px solid #dcdfe6;
    .order_l{
      width: 200px;
      border-right: 1px solid #dcdfe6;
      ul{
        padding: 20px;
        text-align: initial;
        li{
          font-size: 14px;
          margin-top: 20px;
          &:first-child{
            margin-top: 0;
          }
          p{
            &:nth-child(1){
              color:rgb(144, 147, 153); 
            }
            &:nth-child(2){
              font-size: 24px;
              padding: 10px 0;
              
            }
            &:nth-child(3){
              color: rgb(192, 196, 204);
              span{
                &.bgGreen{
                color: #67c23a;
                &::before{
                  content:'+';
                }
                }
                &.bgRed{
                  color: #f56c6c;
                }
              }
            }
          }
        }
      }
    }
    .order_r{
      width: 100%;
      padding-left: 200px;
    }
  }
}

.popBox{
  position: absolute;
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  background: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: .2s ease-out;
  transition: .2s ease-out;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  &:before{
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -20px;
    right: 50px;
  }
  ul{
    li{
      a{
        display: block;
        height: 30px;
        line-height: 30px;
        text-decoration:none;
        color: initial;
        img{
          width: 15px;
          height: 15px;
          background: red;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
}
  </style>

