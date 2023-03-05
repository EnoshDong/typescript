// // 1.没有类型校验
// function sum(a, b) {
//   return a + b;
// }
// // 1.1.数字求和
// // console.log('sum:', sum(1, 2));
// // 1.2.字符串拼接
// // console.log('sum:', sum('hello', 2));
// 2.加入类型校验
function sum(a, b) {
    return a + b;
}
// 2.1.数字校验
// console.log('sum:', sum(2, 2));
// 2.2.字符串校验不通过
console.log('sum:', sum('hello', 2));
