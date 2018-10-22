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
    formatePrice(val) {
        val = val.toString();
        let len = val.length,
          pointIndex = val.indexOf('.');
        if (pointIndex === -1) return `${val}.00`;
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