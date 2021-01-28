import lookup from './lookup';
import templateBindData from './templateBindData'

// 返回#中内容拼接的字符串
export default function parseArr(token, data) {
  // 取出目标数组
  let arr = lookup(data, token[1]);
  // 准备结果字符串
  let arrStr = ''
  // 遍历目标数组，每一项都是一个对象
  arr.forEach(item => {
    // 递归
    arrStr += templateBindData(token[2], item)
  })
  return arrStr;
}