module.exports = {
  /**
   * 格式化为价格，如 ￥12.99
   * @param {number|string} digit 被格式化的原数
   * @param {number} places 保留的位数
   * @return {string} 格式化后的数
   * */
  formatNumber: function(digit, places = 2) {
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
  },
  /*
  * 用户移动端emoji表情在数据库中的存储
  * 用于把用utf16编码的字符转换成实体字符，以供后台存储 
  * @param  {String} str 将要转换的字符串，其中含有utf16字符将被自动检出 
  * @return {String} str 转换后的字符串，utf16字符将被转换成&#xxxx;形式的实体字符 
  * */
  utf16toEntities: function(str) {
    var reg = /[\ud800-\udbff][\udc00-\udfff]/g,
	str = str.replace(reg, function(char) {
		var H, L, code
			if(char.length === 2) {
				H = char.charCodeAt(0)
				L = char.charCodeAt(1)
				code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00
				return "&#" + code + ";"
			} else {
				return char
			}
		})
		return str
	},
	/*
	 * &#xxxxxx;形式的字符串存入数据库后
	 * 读出来的形式为 &amp;#xxxxxx;
	 * 此种格式html解析不出来原有的符号
	 * &被转成了&amp;
	 * 此方法是将字符串中的&amp;转成&
	 * @param {String} str 未被转换的字符串
	 * @return {String} str 转换后的字符串
	 **/
	changeToUtf16Str: function(str){
		var reg = /&amp;/g,
		str = str.replace(reg, function(char) {
			return '&'
		})
		return str
	},
	/*
	 * 防止undefined
	 * @param {String|Number|Object} initValue 初始值
	 * @param {String|Number} translateValue 需要将undefined值转换成什么值
	 * */
	translateUndefined: function(initValue, translateValue) {
		if(typeof initValue === 'undefined' || initValue === null) {
			return translateValue
		} else {
			return initValue
		}
	}
}
