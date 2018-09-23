// 原型链  继承 封装 多态

// 两个类 子类可以调用父类 实例的属性 公有属性 
// 封装
// 多态 x

// es5中是没有类的概念 通过构造函数来模拟类
// function Parent() {
//   this.getMoney = {m:1000}
// }
// Parent.prototype.eat = function () {
//   console.log('吃饭')
// }
// let p = new Parent();
// let p1 = new Parent();
// console.log(p.eat)
// console.log(Parent.__proto__ === Function.prototype)
// console.log(p.constructor === Parent);// 可以检测实例的是属于哪个类的

// __proto__
// prototype
// constructor

// 1.call继承可以继承父类的实例上的属性
// function Parent() {
//   this.money = 100;
// }
// function Child() {
//   Parent.call(this);
// }
// let child = new Child;
// console.log(child.money);

// 2.new Parent 继承父类的实例上的属性 和 公有属性
// function Parent(t) {
//   this.money = t;
// }
// Parent.prototype.eat = function () {
//   console.log('eat');
// }
// function Child() {
  
// }
// Child.prototype = new Parent('200'); // 没人用,实例化子类时不能给父类传参
// let child = new Child();
// child.eat();

// 3.只继承公有属性
// Child.prototype.__proto__ = Parent.prototype; //实现了继承公有的方法
// Object.setPrototypeOf(Child.prototype, Parent.prototype);
// let c = new Child();
// c.eat()

// 4.只继承公有属性
function Parent() {
  this.money = 1000;
}
Parent.prototype.eat = function () {
  console.log('eat');
}
function Child() {

}
// function create(parentPrototype) {
//   function Fn() {}
//   Fn.prototype = parentPrototype
//   Fn.prototype.constructor = Child
//   return new Fn()
// }
// Child.prototype = Object.create(Parent.prototype,{constructor:{value:Child}});
// let c = new Child();
// console.log(c.constructor);