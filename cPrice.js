const cPrice = {
    calculate(type, a, b) {
        let res = 0;
        a = parseFloat((a * 100).toFixed(10));
        b = parseFloat((b * 100).toFixed(10));
        switch (type) {
          case '+':
            res = (a + b) / 100;
            break;
          case '*':
            res = (a * b) / 10000;
            break;
        }
        return this.formatePrice(res);
    },
    formatePrice(val, digits) {
      digits = digits || 2;
      val = val.toString();
      let len = val.length,
        pointIndex = val.indexOf('.'),
        suffix = '';
  
      for(let i = 0; i < digits; i++){
        suffix += '0';
      }
  
      if (pointIndex === -1) return `${val}.${suffix}`;
      if (len - (pointIndex + 1) === 1) return `${val}0`;
      return val;
    },
    add(a, b) {
      return this.calculate('+', a, b);
    },
    x(a, b) {
      return this.calculate('*', a, b);
    }
}