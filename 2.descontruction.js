// 结构相同就可以解构， 类似
// 声明和赋值运算一起使用
let [, name, age] = [, 'zfpx', 9];
console.log(name, age); // 按照key值来解构

let { name, age } = { name: 'zfpx', age: 9 }
console.log(name, age)

let { length } = [, 'zfpx', 9];
console.log(length);


Promise.all([{ name: 'zfpx' }, { age: 9 }]).then(function ([{name: schoolName},{age}]) {
  console.log(schoolName,age);
});

// 解构的默认值
function ajax({ url = "", method = 'get', dataType="text"}) {
  console.log(url,method,dataType)
}

ajax({
  url:'url',
  method:'get',
  //dataType:'json'
});


