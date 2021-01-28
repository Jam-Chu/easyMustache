// 给定一个dataObj有嵌套结构的对象，通过keyname找出对应的值，返回找到的值
/* 
eg：
  dataObj = {
    a: {
      b: {
        c: 100
      }
    }
  }
  keyname = 'a.b.c'
 */
export default function lookup(dataObj, keyname) {
  let keyArr = keyname.split('.');
  if (keyArr.length <= 1) {
    return dataObj[keyArr[0]]
  }
  return lookup(dataObj[keyArr[0]], keyArr.slice(1).join('.'));
}

