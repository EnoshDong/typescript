let demo = 'Hello World!';
// 1.型推断为string类型
demo = 'hello';
// 2.number类型不能赋值给类型推断为string类型的变量
// demo = 100;


let demo2 = 200;
// 3.类型推断为number类型，相当于 let demo2:number = 200;
// 不能将string类型、boolean类型赋值给number类型
// demo2 = 'world';
// demo2 = true;


let state:boolean = true;
// 4.不能将number类型赋值给boolean类型
// state = 300;
// 5.可以将判断结果传给boolean类型
// state = 1 > 2;


// 6.类型推断结果为number类型
// function sum(a:number, b:number) {
//   return a + b;
// }
// // console.log('sum:', sum('hello', 3));
// console.log('sum:', sum(3, 3));
// 7.类型推断结果为number的函数更改为string类型
function sum(a:number, b:number):string {
  return '结果是' + (a + b);
}
console.log('sum:', sum(4, 4));