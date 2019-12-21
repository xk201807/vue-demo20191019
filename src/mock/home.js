import Mock from 'mockjs'

Mock.mock('http://192.168.0.1/home/sum', 'get', {
  totalOrder: '123',
  saleTotal: '5000.00',
  yesterdayTotal: '2000.00'
})