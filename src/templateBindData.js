import lookup from './lookup'
import parseArr from './parseArr'

// 给tokens绑定数据，并将tokens转化回DOM字符串（此处的DOM字符串已经绑定好了数据）
export default function templateBindData(tokens, data) {
  console.log(tokens);
  // 结果字符串
  let domStr = '';
  tokens.forEach(token => {
    if (token[0] === 'text') {
      domStr += token[1]
    } else if (token[0] === 'name') {
      if (token[1] === '.') {
        domStr += data;
      } else {
        domStr += lookup(data, token[1])
      }

    } else if (token[0] === '#') {
      domStr += parseArr(token, data)
    }
  })
  return domStr;
}