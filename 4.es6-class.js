class Parent{
  static a(){ // es6
    return 1;
  }
  constructor(money){
    this.money = money
  }
  drink(){
    console.log('drink')
  }
  eat(){
    console.log('eat');
  }
}
// 又会继承实例上的属性 又会继承公有方法
class Child extends Parent { // Object.setPrototypeOf(Child.prototype,Parent.protype)
  // Parent.call(this,100);
  // constructor(m){
  //   super(m); // super代表的父类 里面的this指的是子类实例
  // }
}
let c = new Child(100);
console.log(Child.a());// Parent.prototype上面的属性是不可枚举的

// let obj = {};
// Object.defineProperty(obj,'a',{ //属性描述器
//   enumerable:true,
//   configurable:true, // 默认是false 表示是否可以删除
//   writable:false, // 仅读属性 表示是否可重写
//   value:1
// });
// delete obj.a
// console.log(obj);