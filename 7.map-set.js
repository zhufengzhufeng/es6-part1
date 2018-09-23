// map set 两种结构

// set 求并集 交集 差级

let arr1 = [1,2,3];
let arr2 = [4,5,6,1,2];
// 展开运算符
// let newArr = [...arr1,...arr2];

// console.log(new Set(newArr));


let set2 = new Set(arr2);
let newArr = arr1.filter(function (item) {
  return set2.has(item);
});
console.log(newArr); // set可以循环 取值 转成数组

// map不能放重复的项 

 