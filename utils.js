module.exports = {
  /**
   * 格式化为价格，如 ￥12.99
   * @param number|string digit 被格式化的原数
   * @param number places 保留的位数
   * @return string 格式化后的数
   */
  formatNumber(digit, places = 2) {
    var _digit = '' + digit,
      _index = _digit.indexOf('.') // “ . ”的索引
    if (_index === -1) {
      return _digit + '.00'
    } else {
      var _tempStr = _digit.substring(_index, _digit.length)
      if (_tempStr.length === 2) {
        return _digit + '0'
      } else {
        return _digit.substring(0, _index) + _tempStr.substring(0, places + 1)
      }
    }
  }
}
