const cPrice = {
    _a: 0,
    _b: 0,
    init(a, b){
        this._a = parseFloat((a * 100).toFixed(10));
        this._b = parseFloat((b * 100).toFixed(10));
    },
    calculate(type, a, b){
        this.init(a, b);
        switch(type){
            case '+': return this.formatePrice(( this._a + this._b ) / 100);break;
            case '*': return this.formatePrice(( this._a * this._b ) / 10000);break;
        }
    },
    formatePrice(val){
        val = val.toString();
        let len = val.length,
            pointIndex = val.indexOf('.');
        if(pointIndex === -1) return `${val}.00`;
        if(len - (pointIndex + 1) === 1) return `${val}0`;
        return val;
    },
    add(a, b){
        return this.calculate('+', a, b);
    },
    x(a, b){
        return this.calculate('*', a, b);
    }
}