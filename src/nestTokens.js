// 对零散的tokens进行嵌套
export default function nestTokens(tokens) {
  // 结果嵌套数组
  let resTokens = [];
  // ****************核心：容器指针，初始指向tokens*********
  let inputContainer = resTokens;
  // #的嵌套栈记录
  let hashStack = [];
  // 遍历处理
  // debugger;
  tokens.forEach(token => {
    // 常规项，不移动容器指针，向容器中push
    if (token[0] === 'text') {
      inputContainer.push(token);
    }
    // name项
    else {
      switch (token[1][0]) {
        // 如果是#，则需要进入一层嵌套
        case '#':
          token[0] = '#';
          token[1] = token[1].slice(1);
          inputContainer.push(token);
          inputContainer = token[2] = [];
          hashStack.push(token);
          break;
        // 如果是/ ，则需要退出一层嵌套
        case '/':
          hashStack.pop()
          inputContainer = hashStack.length > 0 ? hashStack[hashStack.length - 1][2] : resTokens;
          break;
        default:
          inputContainer.push(token);
      }
    }
  })
  return resTokens;
}