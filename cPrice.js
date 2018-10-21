const cPrice = {
    calculate(type, a, b){
        a = parseFloat((a * 100).toFixed(10));
        b = parseFloat((b * 100).toFixed(10));
        switch(type){
            case '+': return this.formatePrice(( a + b ) / 100);break;
            case '*': return this.formatePrice(( a * b ) / 10000);break;
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