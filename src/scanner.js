// 扫描器类，扫描字符串以获得零散tokens
export default class Scanner {
  constructor(scanStr) {
    // 目标串
    this.scanStr = scanStr,
      // 扫描指针1
      this.pos = 0,
      // 扫描指针2
      this.tail = 0
  }
  // 扫描收集一次字符串，遇到结束标志就停止，返回一个串
  scanUntil(stopTag) {
    if (!stopTag.length) { throw new Error('stopTag必须是一个不为空的字符串') }
    let tagLength = stopTag.length;
    let continueFlag = true;
    while (!this.eos() && continueFlag) {
      // 遇到标志起始,开始监测是否是真正的结束标志
      if (this.scanStr[this.tail] === stopTag[0]) {
        // 标识符长度是1，直接结束
        if (tagLength === 1) {
          continueFlag = false;
        }
        // 标志符长度大于1
        else {
          let i = 1
          for (; i <= tagLength - 1; i++) {
            if (this.scanStr[this.tail + i] !== stopTag[i]) {
              break;
            }
          }
          // 是标识符，完全符合
          if (i === tagLength) {
            continueFlag = false;
          } else {
            // 不是标识符
            this.tail++;
          }
        }
      } else {
        // 没遇到标志起始
        this.tail++;
      }
    }
    let res = this.scanStr.substring(this.pos, this.tail);
    this.pos = this.tail;
    if(!res) throw new Error('扫描已完成');
    return res;
  }
  // 跳过特殊标志
  scanSkip(stopTag) {
    let tagLength = stopTag.length;
    if (this.scanStr[this.tail] === stopTag[0]) {
      this.tail += tagLength;
      this.pos = this.tail;
    } else {
      throw new Error('此时不可以使用scanSkip，tail并未匹配上stopTag')
    }
  }
  eos() {
    return this.tail === this.scanStr.length
  }
}

