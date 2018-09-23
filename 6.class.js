@type
class Parent {
  @readonly PI = 3.14
  @big
  eat(){
    console.log('吃')
  }
}
function type(target) {
  target.flag = '结婚了'
}
function readonly(target,key,discriptor) {
  discriptor.writable = false
}
function big(target,key,discriptor) {
  let oldEat = discriptor.value 
  discriptor.value = function () {
    console.log('大餐');
    oldEat();
  }
}
let p = new Parent();
console.log(p.eat());
// 装饰器  装饰模式
// 可以装饰类 但是不能装饰函数 函数会预解释  target = Fn
// 可以装饰属性 属性的第一个参数是target = Fn.prototype,key = Pi,discriptor={}
