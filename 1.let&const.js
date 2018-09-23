// 为什么不在用var了  let const
// 1.var 变量提升
// 2.没有“作用域”的概念
// 3.var声明的变量都会在全局(window)下
// 4.不支持常量
let name = 'zfpx';

// 作用域有两个 全局作用域 函数作用域
let a = 1; // 不会声明在全局下
{
  console.log(a); // 暂存死区 在当前作用域下这个a已经绑定到了此作用域中
  let a = 2
}
// 不能重复赋值
const  PI = 3.14;
PI= 2;
for(let i = 0;i < 3;i++){
   setTimeout(() => {
     console.log(i);
   }, 1000);
}


