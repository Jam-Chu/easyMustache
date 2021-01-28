import parseTemplate from './parseTemplate';
import templateBindData from './templateBindData'

// 创建mustache对象，提供系列模板语法，打包主入口
window.easyMustache = {
// ===============基本的render函数，由模板和数据生成DOM字符串================
  render(templateStr, data) {
    // 由str编译为tokens
    let tokens = parseTemplate(templateStr);
    // 注入数据，返回DOM字符串
    return templateBindData(tokens, data)
  }
}
