class Price {
  constructor(initVal, digit = 2){
      if (this.typeError(initVal)) return;
      this.initVal = initVal;
      this.digit = digit;
  }

  add(val){
      return this.calc('+', val);
  }
  subtract(val){
      return this.calc('-', val);
  }
  multiply(val){
      return this.calc('*', val);
  }
  divide(val){
      return this.calc('/', val);
  }

  calc(type, val){
      if (this.typeError(val)) return;
      
      let initVal = parseFloat(this.initVal),
          _val = parseFloat(val),
          result = null;

      switch(type){
          case '+': result = initVal + _val; break;
          case '-': result = initVal - _val; break;
          case '*': result = initVal * _val; break;
          case '/': result = initVal / _val; break;
          default: return;
      }

      return this.formatPrice(result.toFixed(this.digit));
  }

  formatPrice(val){
      let { digit } = this,
          suffix = '',
          zeroCount = 0,
          suffixArray = val.toString().split('.');

          if(suffixArray[1]){
              zeroCount = this.digit - suffixArray[1].length;
          } else {
              suffix = '.';
              zeroCount = this.digit;
          }

      while (zeroCount-- > 0) {
          suffix += '0';
      }
      return `${val}${suffix}`;
  }

  typeError(initVal){
      if (typeof initVal !== 'number') {
          console.error('必须传入number类型');
          return true;
      }

      return false;
  }
}

export default function (initVal) {
  return new Price(initVal);
}