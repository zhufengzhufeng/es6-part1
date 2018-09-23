let o = [2]
let arr1 = [1, o, 3];
let arr2 = [4, 5, 6];

let newArr = [...arr1, ...arr2];
o[0] = 1000;
console.log(newArr); // 浅拷贝 // 深拷贝


// slice方法
// let o = [2]
// let arr = [1, o, 3, 4];
// let newArr = arr.slice(0, 2);
// o[0] = 10000;
// console.log(newArr);


// let obj = {name:'zfpx',a:{a:1}};
// let obj1 = {age:9};
// let newObj = { ...obj,a:{...obj.a},...obj1};
// obj.a.a = 1000;
// console.log(newObj);

// 自己实现深拷贝
function deepClone(val) {
  if (val === null) return null;
  if (val instanceof Date) return new Date(val);
  if (val instanceof RegExp) return new RegExp(val);
  if (typeof val != 'object') return val;
  let instance = new val.constructor;
  for (let key in val) {
    instance[key] = deepClone(val[key]);
  }
  return instance
}
let r = deepClone({ a: { a: 2 } });
console.log(r);


// 剩余运算符 
function sum(currency, ...args) { // 在函数参数中的剩余运算符 是把剩下的内容放到数组中,剩余运算符只能放在最后一项
  return currency + eval(args.join('+'))
}
console.log(sum('$', 1, 2, 3, 4, 5, 6));


function a() {
  return arguments
}

// 箭头函数中没有arguments属性
let a = (...args) => args
console.log(a(1, 2, 3));

let a = 200;
let obj = {
  a:1000,
  fn:()=>{ // this = obj
    window.setTimeout(()=> {
      console.log(this.a)      
    }, 1000);
    
  }
}
obj.fn();
// function a(a) {
//   return function (b) {
//     return a + b;
//   }
// }
// let a = a => b => a + b;

// 最后腾讯课堂上给个好评