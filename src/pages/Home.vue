<template>
  <div class="home">
    <div class="cards_box">
      <div class="cards_left">
        <ul>
          <li class="card_item">
            <h1>后台项目</h1>
            <p><a href="#">mall</a></p>
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
  </div>
</template>

<script>
import {getHomeTop} from '@/api/home'

export default {
  data () {
    return{
      detailData:{},
      
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.init()
    })
   
  },
  methods: {
    init () {
      getHomeTop().then(res => {
        this.detailData = res.data
      })
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
          width:30%;
          border: 1px solid #ddd;
          h1{
            padding-left :30px;
            box-sizing: border-box;
            background :#eee;
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
}

  </style>

