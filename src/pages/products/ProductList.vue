<template>
import { constants } from 'fs';
import { clearTimeout } from 'timers';
import { setTimeout } from 'timers';
  <div class="productList">ProductList
    
    <div>
      <textarea placeholder="请输入" name="" id="textarea1" maxlength="10" @input="descInput" v-model="desc"></textarea>
      <span class="numberV">{{txtVal}}/10</span>
    </div>
    <div class="header">
      <router-link to="/Home">
        <div>back</div>
      </router-link>
    </div>
    <div class="content">
      <ul >
        <li v-for="(item,index) in dataList" :key="index"
        @touchstart='gtouchstart'
        @touchend="gtouchend">
          <p>
            <span>{{item.title}}</span>
            <span>{{item.tag}}</span>
          </p>
          <p>{{item.article}}</p>
          <p>{{item.time | timeFormat}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProductList', 
  data(){
    return{
      txtVal:0,
      desc:'',
      dataList:[
        {
          
          "title":"标题1",
          "tag":"hot",
          "article":"今天是2020年元旦",
          "time":"2020/1/1"
        },
        {
          "title":"标题1",
          "tag":"hot",
          "article":"今天是2020年元旦",
          "time":"2020/1/1"
        },{
          "title":"标题1",
          "tag":"hot",
          "article":"今天是2020年元旦",
          "time":"2020/1/1"
        },{
          "title":"标题1",
          "tag":"hot",
          "article":"今天是2020年元旦",
          "time":"2020/1/1"
        },{
          "title":"标题1",
          "tag":"hot",
          "article":"今天是2020年元旦",
          "time":"2020/1/1"
        },
      ],
      timeOutEvent:0
    }
  },
  methods:{
    descInput(){
      this.txtVal = this.desc.length;
    },
    gtouchstart(){
      this.timeOutEvent = setTimeout('longPress()',500)
    },
    gtouchend(){
      clearTimeout(timeOutEvent);
      return false;
    },
    longPress(){
      this.timeOutEvent = 0;
      console.log('长按')
    }
  },
  filters:{
    timeFormat:function(value){
      return value.replace("/",'.');
    }
  }
}
</script>

<style lang="less" scoped>
*{
  padding: 0;
  margin: 0;
}
.content{
  ul{
    width: 200px;
    list-style: none;
    border: 1px solid #eee;
    li{
      width: 100%;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      p{
        padding: 0 10px;
        &:nth-child(1){
          display: flex;
          justify-content: space-between;
        }
      }

    }
  }
}
</style>