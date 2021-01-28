import Scanner from './scanner';
import nestTokens from './nestTokens'

// 将模板的字符串转化为tokens
export default function parseTemplate(templateStr) {
  let tokens = [];
  let scanner = new Scanner(templateStr);
  let words = '';
  // 遍历
  while (!scanner.eos()) {
    // 标识符外的文字
    words = scanner.scanUntil('{{');
    // 取出换行符以及空格words.replace(/\s+/g, '')
    tokens.push(['text', words])
    if (scanner.eos()) { break; }
    scanner.scanSkip('{{');
    // 标识内文字
    words = scanner.scanUntil('}}');
    tokens.push(['name', words]);
    scanner.scanSkip('}}');
  }
  return nestTokens(tokens);
}