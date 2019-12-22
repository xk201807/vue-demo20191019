import Mock from 'mockjs'

Mock.mock('http://192.168.0.1/home/sum', 'get', {
  "totalOrder": '123',
  "saleTotal": '5000.00',
  "yesterdayTotal": '2000.00'
})

Mock.mock('http://192.168.0.1/home/todo','get',{
  "orderTobePaid":'1',
  "pendingOrders":'2',
  "ShippedOrder":'3',
  "completedOrder":'4',
  "NewShortageRegister":"5",
  "PendingReturnOrder":"6",
  "ReceivingOrder":"7",
  "PendingRefundApplication":"8",
  "AdvSpaceToExpire":"9",

})

// 商品总览 用户总览
Mock.mock('http://192.168.0.1/home/overView','get',{
  "hasBeenOff":"100",
  "hasBeenOn":"400",
  "inventoryNervous":"50",
  "allGoods":"500",
  "todayNew":"100",
  "yesterdayNew":"200",
  "monthNew":"1000",
  "totalmembers":"5000",
})

// 统计订单左侧
Mock.mock('http://192.168.0.1/home/orderLeft','get',{
  "monthOrder":"10000",
  "lastMonthOrder":"9000",
  "weekOrder":"1000",
  "lastWeekOrder":"1100",
  "monthSale":"100000",
  "lastMonthSale":"90000",
  "weekSale":"50000",
  "lastWeekSale":"55000",

})